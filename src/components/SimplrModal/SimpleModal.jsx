import React from 'react';
// import { Transition } from 'react-transition-group';
import styles from './SimpleModal.module.scss';
// import sprite from 'images/icons.svg';

export const SimpleModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={() => onClose()}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalCloseButton} onClick={() => onClose()}>
              {/* <svg className={styles.headerIcon}>
              <use href={sprite + '#menu'} />
            </svg> */}
              Закрити
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
