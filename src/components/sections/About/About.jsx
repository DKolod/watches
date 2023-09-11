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
            Наш магазин годинників - це місце, де час стає не просто вимірюванням, а джерелом елегантності та стилю. Ми пишаємося тим, що пропонуємо широкий
            вибір високоякісних годинників від провідних світових брендів. Наші годинники - це не просто функціональні аксесуари, а справжні шедеври мистецтва,
            які доповнять ваш образ і підкреслять вашу унікальність. Наші досвідчені консультанти завжди готові допомогти вам обрати ідеальні годинники, що
            відповідають вашим потребам і стилю. Ласкаво просимо до нас, де час набуває нового виміру!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
