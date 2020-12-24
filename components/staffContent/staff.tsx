import styles from './index.module.css'
import {staffs} from './data'

export function Staff(): JSX.Element{
  return(
    <div className={styles.staffContents}>
      <div className={styles.staffContent}>
        <h1 className={styles.contentTitle}>実際のユーザーの声を聞きました！</h1>
      </div>
      <div className={styles.staffBackground}>
        <div className={styles.staffImagesContent}>
            {staffs.map((staff) => {
        const { id, title, image, text } = staff;
            return (
              <div className={styles.staffImages} key={id}>
                <h1>{title}</h1>
                <img src={image} className={styles.staffImg} alt="staffs" />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
export default Staff;