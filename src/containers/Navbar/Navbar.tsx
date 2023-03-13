import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div> {/* логотип */}
      <div>
        {/*общий контейнер*/}
        <div className={styles.inputInfo_container}>
          {/* контейнер под input и информацию*/}
          <div className={styles.input_container}>
            {/* контейнер под input */}
            <svg
              className={styles.input_icon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.646 13.8658L11.896 10.1158C12.7398 8.86576 13.1773 7.30326 12.9585 5.61576C12.5523 2.74076 10.2085 0.428256 7.36478 0.0532565C3.11478 -0.477994 -0.47897 3.11576 0.0522799 7.36576C0.42728 10.2095 2.73978 12.5533 5.61478 12.9595C7.30228 13.1783 8.86478 12.7408 10.146 11.897L13.8648 15.647C14.3648 16.1158 15.146 16.1158 15.646 15.647C16.1148 15.147 16.1148 14.3658 15.646 13.8658ZM2.48978 6.49076C2.48978 4.30326 4.27103 2.49076 6.48978 2.49076C8.67728 2.49076 10.4898 4.30326 10.4898 6.49076C10.4898 8.70951 8.67728 10.4908 6.48978 10.4908C4.27103 10.4908 2.48978 8.70951 2.48978 6.49076Z"
                fill="#192040"
              />
            </svg>
            <input
              className={styles.input_font}
              type="text"
              placeholder="Поиск..."
            />
          </div>
          <div className={styles.infoSocial_container}>
            {/*контейнер под информацию и кнопки соц сетей*/}
            <div className={styles.info_container}>
              <div>
                <h5 className={styles.info_smallfont}>Позвонить нам:</h5>
                <h2 className={styles.info_bigfont}>+7 (555) 888-98-66</h2>
              </div>
              <div>
                <h5 className={styles.info_smallfont}>Написать нам:</h5>
                <h2 className={styles.info_bigfont}>info@stenoprint.ru</h2>
              </div>
            </div>
            <div className={styles.social_btn_container}>
              {/* контейнер под кнопки соц сетей */}
              <button className={styles.social_btn_1}></button>
              <button className={styles.social_btn_2}></button>
            </div>
          </div>
        </div>
        <div className={styles.navbar_container}>
          {/* контейнер под навигацию и кнопки */}
          <button
            className={
              styles.navbar_catalog_font + ' ' + styles.navbar_catalog_btn
            }
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6575 1.41421L10.2432 0L6.00063 4.24262L1.75804 3.20673e-05L0.343831 1.41425L4.58641 5.65683L0.34375 9.8995L1.75796 11.3137L6.00063 7.07104L10.2433 11.3137L11.6575 9.89953L7.41484 5.65683L11.6575 1.41421Z"
                fill="white"
              />
            </svg>
            Каталог товаров
          </button>
          <button className={styles.navbar_font}>Наши услуги</button>
          <button className={styles.navbar_font}>О студии</button>
          <button className={styles.navbar_font}>Портфолио</button>
          <button className={styles.navbar_font}>Блог</button>
          <button className={styles.navbar_font}>Контакты</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
