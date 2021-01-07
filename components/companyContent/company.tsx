import styles from './index.module.css'

export function Company(): JSX.Element{
  return(
    <div className={styles.companyContents}>
      <div className={styles.companyTitle}>
        <h2>COMPANY</h2>
        <h1>会社概要</h1>
      </div>

      <div className={styles.companyContent}>
        <div className={styles.card}>
          <label>会社名</label>
          <p>保育Picks株式会社</p>
        </div>
        <div className={styles.card}>
          <label className={styles.CEO}>代表</label>
          <p>久保田 未来</p>
        </div>
        <div className={styles.card}>
          <label>所在地</label>
          <p>〒150-0046<br />東京都渋谷区松濤1丁目28-2</p>
        </div>

        <div className={styles.card}>
          <label>設立日</label>
          <p>2020年9月17日</p>
        </div>
      </div>
    </div>
  )
}
export default Company;