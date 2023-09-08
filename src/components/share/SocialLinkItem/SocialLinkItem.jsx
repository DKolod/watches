import React from 'react';
import styles from './SocialLinkItem.module.scss';

const SocialLinkItem = ({ socialName, path, pathIcon }) => {
  return (
    <li className={styles.socialLinkItem}>
      <a href={path} target="_blanc" rel="noopener noreferrer">
        <svg className={styles.iconSocialLink}>
          <use href={pathIcon} />
        </svg>
      </a>
    </li>
  );
};

export default SocialLinkItem;
