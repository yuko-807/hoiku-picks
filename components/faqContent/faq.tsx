import styles from './index.module.css'
import React, { useState } from "react";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

export function Faq({id,text,answer}): JSX.Element{
  const [showInfo, setShowInfo] = useState(false);
  
  return(
    
    <div className={styles.faqContents}>
      <div className={styles.faqContent}>
        <div className={styles.faq}>
          <div className={styles.question}>
            <p>{text}</p>
            <button onClick={()=>setShowInfo(!showInfo)}>
              <ArrowDropDownCircleIcon fontSize='large' />
            </button>

          </div>
          <div className={styles.answer}>
            {showInfo?(<>
              <p><div  className={styles.FAQ}>
                <h1>A</h1>
              {answer}
                </div></p>
              </>):null}
            {/* {showInfo && <p>{answer}</p>} */}
          </div>
        </div>

      </div>
    </div>
  )
}
export default Faq;