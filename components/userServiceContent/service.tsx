import styles from './index.module.css'

export function Service(): JSX.Element{
  return(
    <div className={styles.serviceContents}>
      <p className={styles.contentTitle}>保育Picksってどんなサービス??</p>
      <div className={styles.serviceContent}>
        <div className={styles.serviceContentText}>
          <img
            className={styles.serviceLogo}
            src="/img/header-logo.svg"
            alt="logo"
          />
          <h2 className={styles.serviceTitle}>スキマ時間で自分に<br />合った保育園で働ける</h2>
          {/* <h2 className={styles.serviceTitle}>その日だけでも<br />長期でも働ける</h2> */}
        </div>
        <div className={styles.serviceContentImage}>
          <img src="/img/web-screan.svg" alt="SS" />
        </div>
      </div>
    </div>
  )
}

export default Service;