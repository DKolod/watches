import React, { useState } from 'react';
import styles from './Header.module.scss';
import sprite from 'images/icons.svg';
import headerImg from '../../../images/header-all.png';
import { useModal } from 'hooks';
import Modal from '../../Modal/Modal';
import { SimpleModal } from 'components/SimplrModal/SimpleModal';

const Header = () => {
  const { modalActive, shouldRender, openModal, closeModal } = useModal();
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerTop}>
        <h1 className={styles.headerTitle}>Watch | ers</h1>
        <div className={styles.headerNav}>
          <button className={styles.modalShowButton} onClick={openModal}>
            <svg className={styles.headerIcon}>
              <use href={sprite + '#menu'} />
            </svg>
          </button>
          <SimpleModal isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
            <h2>Modal info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              blanditiis modi eaque iste repellendus ducimus fugit ad nam porro, sequi unde atque repellat! Consequuntur alias repellendus corrupti, quia est,
              quae aperiam adipisci dolore accusantium debitis temporibus possimus unde quod iusto pariatur enim nobis asperiores sunt, suscipit necessitatibus!
              Voluptatum, recusandae laboriosam.
            </p>
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
          {/* <button onClick={openModal} type="button">
            Begin
          </button> */}
          <button onClick={() => setModalInfoOpen(true)} type="button">
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
