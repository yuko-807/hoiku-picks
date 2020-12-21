
import styles from './index.module.css'

export function Contact(): JSX.Element{
  return(
    <>
    <div className={styles.form}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScUEkdXQ9RedRl80yDYXPw1TWwHUqqaFFeOfjZpYC72w0nLDQ/viewform?embedded=true"
        width="100%"
        height="900"
        >読み込んでいます…</iframe
      >
      </div>
    </>
  )
}

export default Contact;