import Image from 'next/image';
import styles from './index.module.css'


export function taskContent():JSX.Element{
  return(
    <>
      <div className={styles.taskContent}>
        <h1 className={styles.taskTitle}>こんなお悩みはございませんか？</h1>
        <div className={styles.taskImages}>
          <div className={styles.taskImage}>
            <h1>急遽保育士が欠勤<br />して人手不足</h1>
          </div>
          <div className={styles.taskImage}>
            <h1>教育してもすぐに<br />やめてしまう</h1>
          </div>
          <div className={styles.taskImage}>
            <h1>忙しい時だけ増員<br />したい</h1>
          </div>
          <div className={styles.taskImage}>
            <h1>求人広告を出して<br />も応募が来ない</h1>
          </div>
        </div>
        <h1 className={styles.taskFooter}>
          そのお悩み<span>保育Picks</span>が解決します！
        </h1>
        <img className={styles.arrowIcon} src="/img/down-arrow.svg" alt="arrow"  />
      </div>
    </>
  );
};
export default taskContent;