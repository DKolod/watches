import React from 'react';
import styles from './Header.module.scss';
import sprite from 'images/icons.svg';
import headerImg from '../../../images/header-all.png';
import { useModal } from 'hooks';
import Modal from '../../Modal/Modal';

const Header = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerTop}>
        <h1 className={styles.headerTitle}>Watch | ers</h1>
        <div className={styles.headerNav}>
          <button>
            <svg className={styles.headerIcon}>
              <use href={sprite + '#menu'} />
            </svg>
          </button>

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
          {/* <button onClick={openModal} type="button">
            Begin
          </button> */}
          <button onClick={openModal} type="button">
            Begin
          </button>
        </div>
        <img src={headerImg} alt="rolex" width={630} height={613} className={styles.collectionImg} />
      </div>

      {shouldRender && (
        <Modal closeModal={closeModal} active={modalActive}>
          <div>
            Modal content
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
