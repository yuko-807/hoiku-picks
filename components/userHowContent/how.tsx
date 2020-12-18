import styles from './index.module.css'

export function How(): JSX.Element{
  return(
    <div className={styles.howToWork}>
      <div className={styles.howToWorkTitle}>
        <h1>保育Picksでの働き方</h1>
      </div>
      <div className={styles.howToWorkTitleSub}>
        <h2>あなたにマッチした働き方を提供します！</h2>
        <h3>働き方と給与例</h3>
      </div>
        <div className={styles.howToWorkImages}>
          <div className={styles.howToWorkImage}>
            <img src="/img/avater-3.svg" alt="avater-3" />
          </div>
          <div className={styles.howToWorkImage}>
            <img src="/img/avater-2.svg" alt="avater-2" />
          </div>
          <div className={styles.howToWorkImage}>
            <img src="/img/avater-1.svg" alt="avater-1" />
          </div>
        </div>
    </div>
  )
}
export default How;