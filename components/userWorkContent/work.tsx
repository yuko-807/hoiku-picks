import styles from './index.module.css'
import {works} from './data'

export function Work(): JSX.Element{
  return(
    <div className={styles.workContents}>
      <div className={styles.workTitle}>
        <h1>保育Picksで働く3ステップ</h1>
      </div>
      <div className={styles.workImages}>

        {works.map((work) => {
        const { id, title, image, sub, text } = work;
        return (
          <div className={styles.workImage} key={id}>
            <h2>{title}</h2>
            <img src={image} alt="images" />
            <h3>{sub}</h3>
            <p>{text}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}
export default Work;