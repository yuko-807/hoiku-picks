import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css'
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import Link from 'next/link'
import Image from "next/image";

export function Header(): JSX.Element{
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="navCenter">
        <div className="navHeader">
          <Link href="/">
            <a><img className={styles.logoImage} src="/img/logo.png" alt=""/></a>
          </Link>
          <button
            className="navToggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="linksContainer" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                  <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;