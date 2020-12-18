import Link from 'next/link'
import styles from './index.module.css'

export function Main(): JSX.Element{
  return(
    <div className={styles.mainContents}>
      <div className={styles.mainContent}>
        <div className={styles.mainContentText}>
          <h1>
            単発・長期で働ける！<br />保育士専用<br />お仕事マッチングアプリ
          </h1>
        </div>
        <div className={styles.appContents}>
          <Link href="/others/sorry">
            <a>
              <img
              className={styles.appLogo}
              src="/img/app_store.png"
              alt="apple"
              />
              </a>
          </Link>
          <Link href="/others/sorry">
            <a>
              <img
              className={styles.appLogo}
              src="/img/android.png"
              alt="android"
              />
              </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Main;
