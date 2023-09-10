import React from 'react';
import styles from './Footer.module.scss';
import SocialLinkList from 'components/share/SocialLinkList';

const Footer = () => {
  return (
    <div id="Contacts" className={styles.footerSection}>
      <SocialLinkList id="Contacts" />
    </div>
  );
};

export default Footer;
