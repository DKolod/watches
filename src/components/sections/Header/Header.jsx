import React from 'react';
import styles from './Header.module.scss';
import sprite from 'images/icons.svg';
import headerImg from '../../../images/header-all.png';

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerTop}>
        <h1 className={styles.headerTitle}>Watch | ers</h1>
        <div className={styles.headerNav}>
          <svg className={styles.headerIcon}>
            <use href={sprite + '#menu'} />
          </svg>
          <ul className={styles.headerNavList}>
            <li>
              <a className={styles.headerNavLink} href="#Collection">
                Collection
              </a>
            </li>
            <li>
              <a className={styles.headerNavLink} href="#About">
                About
              </a>
            </li>
            <li>
              <a className={styles.headerNavLink} href="#Contacts">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.heroThumb}>
        <div className={styles.container}>
          <p>
            <span>You</span> control time
          </p>
          <p>it doesn't control you</p>
          <button type="button">Begin</button>
        </div>
        <img src={headerImg} alt="rolex" width={630} height={613} className={styles.collectionImg} />
      </div>
    </div>
  );
};

export default Header;
