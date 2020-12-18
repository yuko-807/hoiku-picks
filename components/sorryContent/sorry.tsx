import styles from './index.module.css'

export function Sorry(): JSX.Element{
  return(
    <div className={styles.sorryContent}>
      <h1>保育Picksのこれから</h1>
      <h2>WEB版アプリのリリースは1月中旬を予定しております</h2>
      <h2>スマホ版アプリのリリースは2月中旬を予定しております</h2>
      <h1>恐れ入りますが今しばらくお待ちください</h1>
    </div>
  )
}
export default Sorry;