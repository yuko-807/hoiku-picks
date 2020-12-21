import styles from './index.module.css'
import Link from 'next/link'
// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


export function Footer(): JSX.Element{
  return(
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul>
          <li><Link href="/"><a>事業者の方はこちら</a></Link></li>
          <li><Link href="/others/user"><a>ユーザーの方はこちら</a></Link></li>
          <li><Link href="/others/company"><a>会社概要</a></Link></li>
          <li><Link href="/others/faq"><a>よくある質問</a></Link></li>
          <li><Link href="/others/conect"><a>お問い合わせ</a></Link></li>
          <li><Link href="/others/team"><a>利用規約</a></Link></li>
        </ul>
      </div>
      <div className="ARR">
        <small>©Gouth, Inc. All right reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;