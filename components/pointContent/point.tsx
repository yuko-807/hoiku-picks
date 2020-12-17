import styles from './index.module.css'
import { points } from './data';

export function Point():JSX.Element{
  return(
    <div className={styles.points}>
      <h1 className={styles.pointsTitle}>POINT</h1>
      <h1 className={styles.pointTitle}>
        保育Picksの<span>4つのポイント</span>!
      </h1>
      <div className={styles.pointContents}>

  {points.map((pointy) => {
        const { id, title, image, sub, text } = pointy;
        return (
          <div className={styles.point} key={id}>
            <h2>{title}</h2>
            <img src={image} alt="images" />
            <h3>{sub}</h3>
            <p>{text}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default Point;