import Head from "next/head";
import styles from "../styles/global.module.scss";
import { Layout } from '../components/layout';
import Main from '../components/mainContent/main'
import Link from 'next/link'


export default function Home(): JSX.Element {
  return (
    <>
      <Layout/>
      <Main/>
    </>
  );
}
