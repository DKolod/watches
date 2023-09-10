import React from 'react';
import styles from './Collection.module.scss';
import sprite from 'images/icons.svg';
import rolexmob from '../../../images/collection-tab.png';

const Collection = () => {
  return (
    <div id="Collection" className={styles.collectionSection}>
      <div className={styles.collectionContainer}>
        <h2>Collectin</h2>
        <ul className={styles.collectionList}>
          <li className={styles.collectionItem}>
            <img src={rolexmob} alt="rolex" className={styles.collectionImg} />
            <h3>Rolex</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi mi donec egestas ornare sodales dignissim pulvinar ultricies. Aenean enim curabitur enim gravida
              volutpat. Viverra tristique libero rhoncus aliquam sed. Morbi sed nisi duis
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <svg className={styles.portfolioIcon}>
                <use href={sprite + '#circle'} />
              </svg>
            </div>
          </li>
          <li className={styles.collectionItem}>
            <img src={rolexmob} alt="rolex" className={styles.collectionImg} />
            <h3>Rolex</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi mi donec egestas ornare sodales dignissim pulvinar ultricies. Aenean enim curabitur enim gravida
              volutpat. Viverra tristique libero rhoncus aliquam sed. Morbi sed nisi duis
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <svg className={styles.portfolioIcon}>
                <use href={sprite + '#circle'} />
              </svg>
            </div>
          </li>
          <li className={styles.collectionItem}>
            <img src={rolexmob} alt="rolex" className={styles.collectionImg} />
            <h3>Rolex</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi mi donec egestas ornare sodales dignissim pulvinar ultricies. Aenean enim curabitur enim gravida
              volutpat. Viverra tristique libero rhoncus aliquam sed. Morbi sed nisi duis
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <svg className={styles.portfolioIcon}>
                <use href={sprite + '#circle'} />
              </svg>
            </div>
          </li>
          <li className={styles.collectionItem}>
            <img src={rolexmob} alt="rolex" className={styles.collectionImg} />
            <h3>Rolex</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi mi donec egestas ornare sodales dignissim pulvinar ultricies. Aenean enim curabitur enim gravida
              volutpat. Viverra tristique libero rhoncus aliquam sed. Morbi sed nisi duis
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <svg className={styles.portfolioIcon}>
                <use href={sprite + '#circle'} />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Collection;
