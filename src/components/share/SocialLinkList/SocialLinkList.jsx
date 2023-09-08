import React from 'react';
import styles from './SocialLinkList.module.scss';
import { socialData } from 'data';
import SocialLinkItem from 'components/share/SocialLinkItem';

const SocialLinkList = ({ id }) => {
  return (
    <ul className={styles.linkList} id={id}>
      {socialData.map(({ id, socialName, path, hrefIcon }) => {
        return <SocialLinkItem key={id} socialName={socialName} path={path} pathIcon={hrefIcon} />;
      })}
    </ul>
  );
};

export default SocialLinkList;
