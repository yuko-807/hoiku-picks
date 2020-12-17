import styles from './index.module.css'
import {hows} from './data';

export function How(): JSX.Element{
  return(
    <div className={styles.howToContents}>
      <h1>使い方は簡単!</h1>
      <div className={styles.howToContent}>
        {hows.map((how) => {
        const { id, title, text } = how;
        return (
          <div className={styles.howToStep} key={id}>
            <p className={styles.num}>{id}</p>
            <h2>{title}</h2>
            <p className={styles.howToText}>{text}</p>
          </div>
        );
      })} 
      </div>
    </div>
  )
}
export default How;