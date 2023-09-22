import React from 'react';
import styles from './Footer.module.scss';
import SocialLinkList from 'components/share/SocialLinkList';

const Footer = () => {
  return (
    <div id="Contacts" className={styles.footerSection}>
      <SocialLinkList id="Contacts" />
      <p className={styles.footerWebevery}>
        <a href="https://webevery.dev/" className={styles.footerWebeveryLink} target="_blank" rel="noreferrer noopener">
          made by webevery
        </a>
      </p>
      {/* <a href="#" className={styles.footerWebevery}>
        made by webevery
      </a> */}
    </div>
  );
};

export default Footer;
