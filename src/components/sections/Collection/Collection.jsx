import React from 'react';
import styles from './Collection.module.scss';
import sprite from 'images/icons.svg';
import rolexmob from '../../../images/collection-tab.png';
import omega from '../../../images/omega.png';
import tagheuer from '../../../images/tagheuer.png';
import patek from '../../../images/patek.png';

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
              Rolex - втілення бездоганного стилю і точності. Цей швейцарський годинник завжди в тренді завдяки своїй неперевершеній якості, елегантному дизайну
              та вишуканим деталям. Розроблений для справжніх цінувачів часу
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <a href="https://www.rolex.com/" target="_blank" rel="noreferrer noopener">
                <svg className={styles.portfolioIcon}>
                  <use href={sprite + '#circle'} />
                </svg>
              </a>
            </div>
          </li>
          <li className={styles.collectionItem}>
            <img src={omega} alt="rolex" className={styles.collectionImg} />
            <h3>Omega</h3>
            <p>
              Годинники Omega — швейцарські вироби високої якості. Засновані в 1848 році. Славляться точністю, елегантним дизайном і відмінними технологіями.
              Фаворити серед зірок і колекціонерів.
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <a href="https://www.omegawatches.com/" target="_blank" rel="noreferrer noopener">
                <svg className={styles.portfolioIcon}>
                  <use href={sprite + '#circle'} />
                </svg>
              </a>
            </div>
          </li>
          <li className={styles.collectionItem}>
            <img src={tagheuer} alt="rolex" className={styles.collectionImg} />
            <h3>Tag Heuer</h3>
            <p>
              Tag Heuer - відомий швейцарський бренд годинників, встановлений в 1860 році. Ця компанія славиться інноваціями в годинниковій промисловості,
              спеціалізується на спортивних і автомобільних колекціях. Відомі своєю точністю та стильним дизайном.
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <a href="https://www.tagheuer.com/" target="_blank" rel="noreferrer noopener">
                <svg className={styles.portfolioIcon}>
                  <use href={sprite + '#circle'} />
                </svg>
              </a>
            </div>
          </li>
          <li className={styles.collectionItem}>
            <img src={patek} alt="rolex" className={styles.collectionImg} />
            <h3>Patek Philippe</h3>
            <p>
              Patek Philippe - вишукані швейцарські годинники, засновані в 1839 році. Виробник розкішних годинників для еліти та колекціонерів. Слово "Patek
              Philippe" асоціюється з бездоганною майстерністю, ексклюзивністю і високою ціною.
            </p>
            <div className={styles.ItemBtnThumb}>
              <span> More </span>
              <a href="https://www.patek.com/" target="_blank" rel="noreferrer noopener">
                <svg className={styles.portfolioIcon}>
                  <use href={sprite + '#circle'} />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Collection;
