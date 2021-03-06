import Head from "next/head";
import Header from './header/header'


export function Layout(): JSX.Element{
  return(
    <>
      <Head>
        <title>保育Picks - 保育をもっと自由に</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
    </>
  )
}

