import styles from './index.module.css'
import Link from 'next/link'

export function Banner(): JSX.Element{
  return(
    <div className={styles.banner}>
      <div className={styles.bannerTitle}>
        <h1>まずは無料で始めてみませんか？</h1>
      </div>
      <div className={styles.bannerContents}>
        <div className={styles.bannerContent}>
          <img
            className={styles.bannerLogo}
            // logo
            src="img/header-logo.svg"
            alt="logo"
          />
          <h1>「その日」「その時間」 <br />の保育士不足を無くす。</h1>
          <img
            className={styles.screanShotResponsive}
            src="img/web-screan.jpeg"
            alt="SS"
          />
          <div className={styles.bannerLinks}>
            <Link href="/others/sorry">
              <a>無料申し込み</a>
            </Link>
            <Link href="/others/conect">
              <a className={styles.rightLink}>資料請求</a>
            </Link>
          </div>
        </div>
        <img className={styles.screanShot} src="img/web-screan.svg" alt="SS" />
      </div>
    </div>
  )
}
export default Banner;