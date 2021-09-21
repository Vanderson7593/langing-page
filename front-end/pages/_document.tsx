import Document, { Head, Html, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
