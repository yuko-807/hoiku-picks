import styles from './index.module.css'
import {faqs} from './data'

export function Faq(): JSX.Element{
  
  return(
    <div className={styles.faqContents}>
      <div className={styles.faqTitle}>
        <h2>FAQ</h2>
        <h1>よくある質問</h1>
      </div>

      <div className={styles.faqContent}>

        {faqs.map((faq) => {
        const { id, text, answer } = faq;
        return (
        <div className={styles.faq} key={id}>
          <div className={styles.question}>
            <p>{text}</p>
            <img className={styles.arrowIcon} src="/img/down-arrow.svg" alt="arrow" />
          </div>
          <div className={styles.answer}>
            <p>
              {answer}
            </p>
          </div>
        </div>
        );
      })}
      </div>
    </div>
  )
}
export default Faq;