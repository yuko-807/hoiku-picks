import Link from "next/link";
import styles from "./index.module.css";

export function Main(): JSX.Element {
  return (
    <div className={styles.mainContents}>
      <div className={styles.mainContent}>
        <div className={styles.mainContentText}>
          <h1>
            保育園で働くなら!!
            <br />
            <img className={styles.logo} src="/img/hoiku-logo.png" alt="logo" />
            {/* スキマ時間で自分に合った<br/>保育園で働ける<br/>保育園マッチングアプリ */}
            {/* 単発・長期で働ける！<br />保育士専用<br />お仕事マッチングアプリ */}
          </h1>
        </div>
        <div className={styles.appContents}>
          <Link href="#">
            <a>
              <img
                className={styles.appLogo}
                src="/img/app_store.png"
                alt="apple"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <img
                className={styles.androidLogo}
                src="/img/android.png"
                alt="android"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Main;
