import styles from './index.module.css'

export function Service(): JSX.Element{
  return(
    <div className={styles.serviceContents}>
      <h1 className={styles.contentTitle}>あなたにマッチした保育園見つかります！</h1>
      <div className={styles.serviceContent}>
        <div className={styles.serviceContentText}>
          <img
            className={styles.serviceLogo}
            src="/img/header-logo.svg"
            alt="logo"
          />
          <h2 className={styles.serviceTitle}>その日だけでも<br />長期でも働ける</h2>
        </div>
        <div className={styles.serviceContentImage}>
          <img src="/img/web-screan.svg" alt="SS" />
        </div>
      </div>
    </div>
  )
}

export default Service;