import Head from "next/head";
import styles from "../styles/global.module.scss";
import { Layout } from '../components/layout';
import mainStyle from '../components/mainContent/index.module.css'
import Link from 'next/link'


export default function Home(): JSX.Element {
  return (
    <>
      <Layout/>
      <div className="mainContents">
      <div className="mainContent">
        <div className="mainText">
          <h1>「その日」「その時間」<br />の保育士不足を無くす。</h1>
          <p>1日単位の採用から繋がる</p>
          <p>保育士採用マッチングアプリ</p>
        </div>
        <div className="mainLinks">
          <Link href="#">
            <a>無料申し込み</a>
          </Link>
          <Link href="conect.html">
            <a >資料請求</a>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
