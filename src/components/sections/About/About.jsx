import React from 'react';
import styles from './About.module.scss';
import AboutImg from '../../../images/about-img.png';

const About = () => {
  return (
    <div id="About" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <img className={styles.aboutImg} src={AboutImg} alt="watch" />
        <div className={styles.aboutTextThumb}>
          <h2 className={styles.aboutTitle}>About</h2>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur. Mi mi donec egestas ornare sodales dignissim pulvinar ultricies. Aenean enim curabitur enim gravida
            volutpat. Viverra tristique libero rhoncus aliquam sed. Morbi sed nisi duis nunc commodo. Amet euismod turpis et pellentesque magna magnis viverra
            faucibus. Sed elit turpis sed pellentesque quis integer aliquam in. Adipiscing tristique magna donec condimentum enim consequat. Venenatis non
            consequat metus amet. Ut sed elementum egestas arcu risus rhoncus blandit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
