import styles from './index.module.css'
import Link from 'next/link'


export function Footer(): JSX.Element{
  return(
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h1>保育をもっと自由に</h1>
        <img src="/img/header-logo.svg" alt="footer"/>
        <ul>
          <li><Link href="/"><a>事業者の方はこちら</a></Link></li>
          <li><Link href="/others/user"><a>ユーザーの方はこちら</a></Link></li>
          <li><Link href="/others/company"><a>会社概要</a></Link></li>
          <li><Link href="/others/faq"><a>よくある質問</a></Link></li>
          <li><Link href="/others/conect"><a>お問い合わせ</a></Link></li>
          <li><Link href="/others/team"><a>利用規約</a></Link></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;