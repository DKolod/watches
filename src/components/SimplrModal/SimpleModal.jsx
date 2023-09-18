import React from 'react';
// import { Transition } from 'react-transition-group';
import styles from './SimpleModal.module.scss';
import sprite from 'images/icons.svg';

export const SimpleModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={() => onClose()}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2 className={styles.headerTitleModal}>Watch | ers</h2>
            <div className={styles.iconCloseBlog}></div>
            <button className={styles.modalCloseButton} onClick={() => onClose()}>
              <svg className={styles.closeIcon}>
                <use href={sprite + '#close'} />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
