import React from 'react'
import styles from './index.module.css'

export function Faq(): JSX.Element {
  return (
  <article className={`${styles.cp_qa} ${styles.cp}`}>
    <div className="cp_actab">
      <input id="cp_tabfour031" type="checkbox" name="tabs"/>
      <label for="cp_tabfour031">保育Picksはどんなサービスですか？</label>
      <div className={`${styles.cp_actabContent}`}>
      <p>保育Picksは保育士に特化した、採用マッチングアプリです！最短1時間から働けます。ご希望であればその保育園で長期雇用も可能です！</p>
      </div>
    </div>
    {/* <div className="cp_actab">
      <input id="cp_tabfour032" type="checkbox" name="tabs"/>
      <label for="cp_tabfour032">残業代・深夜手当は出ますか？</label>
      <div className={`${styles.cp_actab-content}`}>
      <p>各保育園の判断にはよりますが、労働基準法に則り、法定労働時間の8時間を超える残業の場合・深夜業の労働(22:00〜5:00)において割増手当が発生します。どちらも時給の25%が加算され、残業が深夜業に発生した場合にはどちらも適用されるため、50%が時給に上乗せされます。</p>
      </div>
    </div>
    <div className="cp_actab">
      <input id="cp_tabfour033" type="checkbox" name="tabs"/>
      <label for="cp_tabfour033">勤務形態は選べますか？</label>
      <div className={`${styles.cp_actab-content}`}>
      <p>最短1時間から、日勤、長期までお選びできます！詳しくは求人の詳細や、保育園とご相談ください。</p>
      </div>
    </div>
    <div className="cp_actab">
      <input id="cp_tabfour033" type="checkbox" name="tabs"/>
      <label for="cp_tabfour033">どんな方が対象ですか？</label>
      <div className={`${styles.cp_actab-content}`}>
      <p>保育士資格を取得されている方が対象となります。その他条件は各保育園とご相談ください。</p>
      </div>
    </div> */}
  </article>
  )
}

export default Faq;
