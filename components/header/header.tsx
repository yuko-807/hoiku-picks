import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import styles from './index.module.css';
import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className={styles.header}>
      <Head>
        <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
      </Head>
      <div className={styles.headerContents}>
        <a href="#"
          ><img
            className={styles.logo}
            src="/hoiku-images/header-logo.svg"
            alt="logo"
        /></a>

        <button id="button"><i className="fas fa-bars"></i></button>
      </div>
      <ul id="navbarSupportedContent">
        <Link href="user.html">
        <a>保育士様はこちら </a>
        </Link>
        <a href="index.html">保育園様はこちら </a>
        <a href="company.html">会社概要 </a>
        <a href="faq.html">よくある質問 </a>
        <a href="conect.html"> お問い合わせ </a>
        <a href="team.html">利用規約 </a>
      </ul>
    </nav>
  );
};

export default Header;
