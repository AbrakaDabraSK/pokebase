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

  const { data, error } = useSWR<Link>(
    identifier && domain && slug 
    ? `/link/profile?identifier=${identifier}&domain=${domain}&slug=${slug}` 
    : null
  )

  if (error) router.push('/')

  useEffect(() => {
    if (!data) return
  }, [data])

  return (
    <>
      <Head>
        <title>{data?.title}{data && (' | '+data.domain)}</title>
        <meta name="description" content={data?.desc}></meta>
        <meta property="og:description" content={data?.desc} />
        <meta property="og:title" content={data?.title} />
        <meta property="twitter:description" content={data?.desc} />
        <meta property="twitter:title" content={data?.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseContainer>
        <section className="flex-grow w-full p-3 sm:max-w-3xl">
          {/** Header **/}
          <header>
            <h1 className="pl-1.5 md:pl-0 mt-1 mb-2 text-2xl font-bold text-black">
              Sharelink
            </h1>
          </header>

          {/** LinkCard **/}
          {data && (
            <LinkCard link={data} />
          )}
        </section>
      </BaseContainer>
    </>
  )
}

export default ShareLink
