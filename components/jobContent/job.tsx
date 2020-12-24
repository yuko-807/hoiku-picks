import styles from './index.module.css'

export function Job(): JSX.Element{
  return(
    <>
    <div className={styles.feeTitle}>
      <h1 className={styles.contentTitle}>保育Picksの料金形態</h1>
    </div>

    <div className={styles.jobContents}>
      <h1>働きに来た保育士を紹介料、<br />想定年収の15%で採用が可能！</h1>
      <img className={styles.hoikuJob} src="img/hoiku-jobs.svg" alt="job" />
      <div className={styles.feeForExample}>
        <div className={styles.feeForExampleText}>
          <h1>他のエージェントの仲介手数料</h1>
          <p className={styles.jobText}>(例)年収300万円 × 30% = <span>90万円</span></p>
          <h1>保育Picksの仲介手数料</h1>
          <p className={styles.jobText}>
            (例)年収300万円 × 15% = <span className={styles.picksFee}>45万円</span>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Job;