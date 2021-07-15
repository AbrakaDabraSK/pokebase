import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'

import {
  Link
} from '../../../../types'

// @components
import LinkCard from '../../../../components/card/link'
import BaseContainer from '../../../../components/container/base'

const ShareLink: React.FC = () => {
  // Util
  const router = useRouter()
  const { identifier, domain, slug } = router.query

  const { data: link, error } = useSWR<Link>(
    identifier && domain && slug 
    ? `/link/profile?identifier=${identifier}&domain=${domain}&slug=${slug}` 
    : null
  )

  if (error) router.push('/')

  useEffect(() => {
    if (!link) return
  }, [link])
  
  return (
    <>
      <Head>
        <title>{link?.title}{link && (' | '+link.domain)}</title>
        <meta name="description" content={link?.desc}></meta>
        <meta property="og:description" content={link?.desc} />
        <meta property="og:title" content={link?.title} />
        <meta property="twitter:description" content={link?.desc} />
        <meta property="twitter:title" content={link?.title} />
        <link rel="icon" href="/favicon.ico" />
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

export default ShareLink
