import styles from './index.module.css'

export function Fee(): JSX.Element{
  return(
    <>
    <div className={styles.feeTitle}>
      <h1 className={styles.contentTitle}>サービス手数料</h1>
    </div>

    <div className={styles.feeContents}>
      <div className={styles.hoikuFee}>
        <h5>PRICE</h5>
        <h4>料金</h4>
        <div className={styles.feeContent}>
          <h1>初期費用</h1>
          <div className={styles.feeContentRight}><span>0</span>円</div>
        </div>
        <div className={styles.feeContent}>
          <h1>紹介手数料</h1>
          <div className={styles.feeContentRight}>
            <span>30%</span>x日給
          </div>
        </div>
        <div className={styles.feeInfo}>日給 ＝ 時給 × 就業時間 ＋ 交通費</div>
        <div className={styles.feeForExample}>
          <div className={styles.feeForExampleText}>
            <h1>ワーカーへの報酬</h1>
            <p>
              (例)時給1,100円 5時間勤務した場合 = 時給1,100円 × 5h +
              500円(交通費) = 6,000円
            </p>
            <h1>仲介手数料</h1>
            <p>
              (例)時給1,100円 5時間勤務した場合 =6,000円 × 30% = 1,800円 (税別)
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Fee