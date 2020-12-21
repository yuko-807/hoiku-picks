
import styles from './index.module.css'

export function Contact(): JSX.Element{
  return(
    <>
    <div className={styles.form}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSehu469O1Vu150AGskiSAM8S-Ydyj0Y8iUVPjaitemaatIavQ/viewform?embedded=true" width="100%" height="900" >読み込んでいます…</iframe>
      </div>
    </>
  )
}

export default Contact;