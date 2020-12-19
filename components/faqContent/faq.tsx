import styles from './index.module.css'
import React, { useState } from "react";

export function Faq({id,text,answer}): JSX.Element{
  const [showInfo, setShowInfo] = useState(false);
  
  return(
    <div className={styles.faqContents}>
      <div className={styles.faqTitle}>
        <h2>FAQ</h2>
        <h1>よくある質問その{id}</h1>
      </div>
      <div className={styles.faqContent}>

        <div className={styles.faq}>
          <div className={styles.question}>
            <p>{text}</p>
            <button>
              <img className={styles.arrowIcon} src="/img/down-arrow.svg" alt="arrow" onClick={()=>setShowInfo(!showInfo)} />
            </button>
          </div>
          <div className={styles.answer}>
            {showInfo && <p>{answer}</p>}
          </div>
        </div>

      </div>
    </div>
  )
}
export default Faq;