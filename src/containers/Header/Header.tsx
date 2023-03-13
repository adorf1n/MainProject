import React from 'react';

import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.top_container}>
          <div>
            <span className={styles.top_font}>
              При покупке 10-ти рулонов обоев - дизайн в ПОДАРОК!
            </span>
            <button className={styles.top_button}>
              <span className={styles.top_button_font}>Перейти</span>
            </button>
          </div>
          <div className={styles.top_img}></div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
