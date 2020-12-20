import Head from "next/head";
import Header from './header/header'


export function Layout(): JSX.Element{
  const faviconPath = "favicon_io"
  return(
    <>
      <Head>
        <title>Hoiku Picks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}/hoiku-icon.png`} />
        <link rel="icon" sizes="32x32" href={`${faviconPath}/hoiku-icon.png`} />
        <link rel="icon" sizes="16x16" href={`${faviconPath}/hoiku-icon.png`} />
      </Head>
      <Header/>
    </>
  )
}

