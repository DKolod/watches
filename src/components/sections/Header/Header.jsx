import React from 'react';
import styles from './Header.module.scss';
import sprite from 'images/icons.svg';

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerTop}>
        <h1 className={styles.headerTitle}>Watch | ers</h1>
        <svg className={styles.headerIcon}>
          <use href={sprite + '#menu'} />
        </svg>
      </div>
      <div className={styles.container}>
        <p>
          <span>You</span> control time
        </p>
        <p>it doesn't control you</p>
        <button type="button">Begin</button>
      </div>
    </div>
  );
};

export default Header;
