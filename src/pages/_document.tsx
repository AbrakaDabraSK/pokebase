import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/**  default **/}
          <meta name="keywords" content="open source,pokebase,facebook alternative" />
          <meta name="description" content="The Open Source Facebook Alternative" />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <meta name="generator" content="pokebase" />
          {/** schema.org **/}
          <meta itemProp="name" content="pokebase" />
          <meta itemProp="title" content="pokebase" />
          <meta itemProp="keywords" content="open source,pokebase,facebook alternative" />
          <meta itemProp="description" content="The Open Source Facebook Alternative" />
          <meta itemProp="image" content="https://pokebase.vercel.app/img/fb-poster-pokebase.png" />
          {/** Facebook Open Graph data **/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pokebase.vercel.app" />
          <meta property="og:locale" content="sk" />
          <meta property="og:site_name" content="pokebase" />
          <meta property="og:title" content="pokebase" />
          <meta property="og:description" content="The Open Source Facebook Alternative" />
          <meta property="og:image" content="https://pokebase.vercel.app/img/fb-poster-pokebase.png" />
          {/** Twitter Card data **/}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@publisher_handle" />
          <meta name="twitter:title" content="pokebase" />
          <meta name="twitter:description" content="The Open Source Facebook Alternative" />
          <meta name="twitter:creator" content="@author_handle" />
          <meta name="twitter:image" content="https://pokebase.vercel.app/img/fb-poster-pokebase.png" />
          {/** Favicon **/}
          <link rel="icon" type="image/svg+xml" href="/vercel.svg" />
          {/** Font **/}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/** Icons **/}
          <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        </Head>
        <body className="bg-gray-100 font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
