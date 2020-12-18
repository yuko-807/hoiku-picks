import styles from './index.module.css'
import Link from 'next/link'

export function Banner(): JSX.Element{
  return(
    <div className={styles.bannerContents}>
      <div className={styles.bannerTitle}>
        <h1>まずは無料ダウンロード！</h1>
      </div>
      <div className={styles.bannerContent}>
        {/* serviceContent */}
        <div className={styles.serviceContentText}>
          <img
            className={styles.serviceLogo}
            src="/img/header-logo.svg"
            alt="logo"
          />
          <h2 className={styles.serviceTitle}>その日だけでも<br />長期でも働ける</h2>
          <div className={styles.bannerApp}>
            {/* styles.appContents  */}
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
        <div className={styles.serviceContentImage}>
          <img src="/img/web-screan.svg" alt="SS" />
        </div>
      </div>
    </div>
  )
}
export default Banner;
