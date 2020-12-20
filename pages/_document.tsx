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
          <meta name="description" content="保育Picksは「その日」「その時間」の保育士不足を無くす。1日単位の採用から繋がる保育士採用マッチングアプリです。最短1時間から働けます。ご希望であればその保育園で長期雇用も可能です！"></meta>
          <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}/hoiku-icon180.png`} />
          <link rel="icon" sizes="32x32" href={`${faviconPath}/favicon32.png`} />
          <link rel="icon" sizes="16x16" href={`${faviconPath}/favicon.ico`} />
          <link rel="manifest" href={`${faviconPath}/site.webmanifest`} />
          <meta name="theme-color" content="#000000" key="themeColor" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
