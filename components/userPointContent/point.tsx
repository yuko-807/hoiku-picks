import styles from './index.module.css'
import { points } from './data'

export function Point():JSX.Element{
  return(
    <div className={styles.pointContents}>
      <div className={styles.pointTitle}>
        <h1>保育Picksの3つのポイント</h1>
      </div>
      <div className={styles.pointContent}>

        {points.map((point) => {
        const { id, title, image, sub, text } = point;
        return (
          <div className={styles.pointImage} key={id}>
            <h2>{title}</h2>
            <img src={image} alt="calender" />
            <h1>{sub}</h1>
            <p>{text}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}
export default Point;