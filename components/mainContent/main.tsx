import Link from 'next/link'
import styles from './index.module.css'


export function mainContent():JSX.Element{
  return(
    <div className={styles.mainContents}>
      <div className={styles.mainContent}>
        <div className={styles.mainText}>
          <h1>「その日」「その時間」<br />の保育士不足を無くす。</h1>
          <p>1日単位の採用から繋がる</p>
          <p>保育士採用マッチングアプリ</p>
        </div>
        <div className={styles.mainLinks}>
          <Link href="#">
            <a>無料申し込み</a>
          </Link>
          <Link href="conect.html">
            <a >資料請求</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default mainContent;
