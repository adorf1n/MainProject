import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import cross from './img/cross.svg';
import input_icon from './img/input_icon.svg';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <NavLink to={'/'} className={styles.logo}></NavLink> {/* логотип */}
      <div className={styles.allContainer}>
        {/*общий контейнер*/}
        <div className={styles.inputInfo_container}>
          {/* контейнер под input и информацию*/}
          <div className={styles.input_container}>
            {/* контейнер под input */}
            <img className={styles.input_icon} src={input_icon} alt="" />
            <input
              type="text"
              placeholder="Найти..."
              className={styles.input}
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
            <img src={cross} alt="" />
            Каталог товаров
          </button>
          <NavLink to={'/services'} className={styles.navbar_font}>
            <p>Наши услуги</p>
          </NavLink>
          <NavLink to={'/about'} className={styles.navbar_font}>
            О студии
          </NavLink>
          <NavLink to={'/'} className={styles.navbar_font}>
            Портфолио
          </NavLink>
          <NavLink to={'/sliders'} className={styles.navbar_font}>
            Блог
          </NavLink>
          <NavLink to={'/contacts'} className={styles.navbar_font}>
            Контакты
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
