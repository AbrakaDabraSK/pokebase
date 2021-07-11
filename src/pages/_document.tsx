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
          <meta property="og:site_name" content="pokebase" />
          <meta property="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <link rel="icon" type="image/svg+xml" href="/vercel.svg" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet"></link>
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