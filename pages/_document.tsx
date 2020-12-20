import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    const faviconPath = "favicon_io";
    return (
      <Html lang="ja">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}/hoiku-icon.png`} />
          <link rel="icon" sizes="32x32" href={`${faviconPath}/hoiku-icon.png`} />
          <link rel="icon" sizes="16x16" href={`${faviconPath}/hoiku-icon.png`} />
          <link rel="manifest" href={`${faviconPath}/site.webmanifest`} />
          <meta name="theme-color" content="#000000" key="themeColor" />
          <title>Hoiku Picks</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
