import Link from 'next/link'
import mainStyle from 'components/mainContent/index.module.css'


export function mainContent():JSX.Element{
  return(
    <div className={mainstyle.mainContents}>
      <div className={mainStyle.mainContent}>
        <div className={mainStyle.mainText}>
          <h1>「その日」「その時間」<br />の保育士不足を無くす。</h1>
          <p>1日単位の採用から繋がる</p>
          <p>保育士採用マッチングアプリ</p>
        </div>
        <div className={mainStyle.mainLinks}>
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
