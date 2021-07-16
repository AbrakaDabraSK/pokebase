import { useRouter } from 'next/router'
import Head from 'next/head'
import Axios from 'axios'

import {
  ShareLinkPageProps
} from '../../../../types'

// @components
import LinkCard from '../../../../components/card/link'
import BaseContainer from '../../../../components/container/base'

const ShareLink: React.FC<ShareLinkPageProps> = ({ link, error }) => {
  const router = useRouter()

  if (error) router.push('/')
  
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
          <header>
            <h1 className="pl-1.5 md:pl-0 mt-1 mb-2 text-2xl font-bold text-black flex items-center justify-start">
              {link?.domain === 'youtube.com' && (
                <i className="mr-2 text-4xl font-semibold text-green-300 bx bxl-youtube"></i>
              )}
              <>Sharelink</>
            </h1>
          </header>

          {/** LinkCard **/}
          {link && (
            <LinkCard link={link} />
          )}
        </section>
      </BaseContainer>
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
