import { useRouter } from 'next/router'
import Head from 'next/head'
import Axios from 'axios'

import {
  ShareLinkPageProps
} from '../../../../types'

// @helpers
import {
  hasShopDomain,
  hasYoutubeDomain
} from '../../../../utils/helpers'

// @components
import YoutubeModal from '../../../../components/modal/youtube'
import LinkCard from '../../../../components/card/link'
import BaseContainer from '../../../../components/container/base'

const ShareLink: React.FC<ShareLinkPageProps> = ({ link, error }) => {
  const router = useRouter()

  if (error) router.push('/')

  const metaType = (domain: string): string => {
    if (hasYoutubeDomain(domain)) return 'Video'
    if (hasShopDomain(domain)) return 'Shop'

    return 'Website'
  }
  
  return (
    <>
      <Head>
        {/**  default **/}
        <meta name="keywords" content={link.keywords} />
        <meta name="description" content={link.desc} />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="generator" content="pokebase" />
        {/** schema.org **/}
        <meta itemProp="name" content="pokebase" />
        <meta itemProp="title" content={link.title} />
        <meta itemProp="keywords" content={link.keywords} />
        <meta itemProp="description" content={link.desc} />
        <meta itemProp="image" content={link.image} />
        {/** Facebook Open Graph data **/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pokebase.vercel.app/sharelink/${link.identifier}/${link.domain}/${link.slug}`} />
        <meta property="og:locale" content="sk" />
        <meta property="og:site_name" content="pokebase" />
        <meta property="og:title" content={link.title} />
        <meta property="og:description" content={link.desc} />
        <meta property="og:image" content={link.image} />
        {/** Twitter Card data **/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:title" content={link.title} />
        <meta name="twitter:description" content={link.desc} />
        <meta name="twitter:creator" content="@author_handle" />
        <meta name="twitter:image" content={link.image} />
        {/** Title **/}
        <title>{link.title}{link && (' | '+link.domain)}</title>
      </Head>
      <BaseContainer>
        <section className="flex-grow w-full p-3 sm:max-w-3xl">
          {/** Header **/}
          <header className="relative px-4 py-4 mb-4 shadow-md rounded-xl bg-gradient-to-br from-green-500 to-green-300 min-w-340">
            {/** Shape **/}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/img/shapes/shape_7.png`,
              }}
            ></div>
            <h1 className="pl-1.5 md:pl-0 mt-1 mb-2 flex items-center justify-start text-white">
              {/** Icon **/}
              {(hasYoutubeDomain(link.domain) ? (
                <i className="mr-3 text-4xl font-semibold bx bxl-youtube"></i>
              ) : (
                <i className="mr-3 text-4xl font-semibold bx bxs-share-alt"></i>
              ))}

              {/** Title **/}
              <span className="pl-4 ml-4 border-l-4 border-white">
                <span className="text-3xl font-extrabold">
                  Sharelink
                </span>
                <small className="block text-sm font-medium sm:text-base">
                  {metaType(link.domain)}
                </small>
              </span>
            </h1>
          </header>

          {/** LinkCard **/}
          {link && (<LinkCard link={link} />)}
        </section>
      </BaseContainer>
      <YoutubeModal />
    </>
  )
}

export async function getServerSideProps({query}) {
  try {
    const { identifier, domain, slug } = query
    
    const { data: link } = await Axios.get(
      identifier && domain && slug 
      ? `/link/profile?identifier=${identifier}&domain=${domain}&slug=${slug}` 
      : null
    )
    return { props: { link, error: null } }
  } catch (error) {
    return { props: { link: null, error: error.response.data } }
  }
}

export default ShareLink
