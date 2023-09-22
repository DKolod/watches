import React, { useEffect } from 'react';
import styles from './ModalList.module.scss';

import sprite from 'images/icons.svg';

const ModalList = ({ closeModal, openModal }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openModal]);
  return (
    <div>
      <button className={styles.closeModal} onClick={closeModal}>
        <svg className={styles.closeIcon}>
          <use href={sprite + '#close'} />
        </svg>
      </button>
      <ul>
        <li className={styles.headerNavLink} onClick={closeModal}>
          <a className={styles.headerNavLink} href="#Collection">
            Collection
          </a>
        </li>
        <li className={styles.headerNavLink} onClick={closeModal}>
          <a className={styles.headerNavLink} href="#About">
            About
          </a>
        </li>
        <li className={styles.headerNavLink} onClick={closeModal}>
          <a className={styles.headerNavLink} href="#Contacts">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ModalList;
