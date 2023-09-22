import React, { useState } from 'react';
import styles from './Header.module.scss';
import sprite from 'images/icons.svg';
import headerImg from '../../../images/header-all.png';
import { useModal } from 'hooks';
import Modal from '../../Modal/Modal';
import ModalList from '../../sections/ModalList/ModalList';
import { SimpleModal } from 'components/SimplrModal/SimpleModal';

const Header = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  // useEffect(() => {
  //   if (openModal) {
  //     document.body.style.overflow = 'hidden';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [openModal]);

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerTop}>
        <a href="../../../../public/index.html">
          <h1 className={styles.headerTitle}>Watch | ers</h1>
        </a>

        <div className={styles.headerNav}>
          <button className={styles.modalShowButton} onClick={openModal}>
            <svg className={styles.headerIcon}>
              <use href={sprite + '#menu'} />
            </svg>
          </button>
          <SimpleModal isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
            <form className={styles.form}>
              <label className={styles.label} htmlFor="name">
                Ім’я
                <input className={styles.input} type="text" id="name" name="from_name" placeholder="Введіть ім’я" required />
              </label>
              <label className={styles.label} htmlFor="phone">
                Номер
                <input className={styles.input} type="tel" id="phone" name="user_phone" placeholder="Введіть номер" required />
              </label>
              <label className={styles.label} htmlFor="email">
                Пошта
                <input className={styles.input} type="email" id="email" name="email_id" placeholder="Введіть пошту" required />
              </label>

              <button className={styles.btn} type="submit">
                Залишити заявку
              </button>
            </form>
          </SimpleModal>

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

          <button onClick={() => setModalInfoOpen(true)} type="button">
            Begin
          </button>
        </div>
        <img src={headerImg} alt="rolex" width={630} height={613} className={styles.collectionImg} />
      </div>

      {shouldRender && (
        <Modal closeModal={closeModal} active={modalActive}>
          {/* <div>
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
          </div> */}
          <ModalList closeModal={closeModal} openModal={openModal} />
        </Modal>
      )}
    </div>
  );
};

export default Header;
