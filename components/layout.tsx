import Head from "next/head";
import Header from './header/header'


export function Layout(): JSX.Element{
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
    </>
  )
}

