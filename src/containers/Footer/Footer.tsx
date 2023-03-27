import styles from './Footer.module.scss';
import ruso from './img/RUSO.svg';
import insta from './img/insta.svg';
import vk from './img/vk.svg';

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.catalog_container}>
          {/*Каталог товаров */}
          <h5 className={styles.h5}>Каталог товаров</h5>
          <div className={styles.catalog_btn_container}>
            <div className={styles.catalog_btn_childcontainer}>
              <button>Дизайнерские обои</button>
              <button>Фирменные обои</button>
              <button>Виниловые обои</button>
              <button>Дизайнерские обои</button>
              <button>Фирменные обои</button>
              <button>Виниловые обои</button>
            </div>
            <div className={styles.catalog_btn_childcontainer}>
              <button>Виниловые обои</button>
              <button>Дизайнерские обои</button>
              <button>Фирменные обои</button>
              <button>Виниловые обои</button>
              <button>Дизайнерские обои</button>
            </div>
          </div>
        </div>
        <div>
          {/*Наши услуги */}
          <h5 className={styles.h5}>Наши услуги</h5>
          <div className={styles.services_btn_container}>
            <a href="/" className={styles.services_btn_font}>
              Создание уникального дизайна в квартире, доме, офисе
            </a>
            <a href="/" className={styles.services_btn_font}>
              Оформление офисов и коммерческих помещений в фирменном стиле
            </a>
            <a href="/" className={styles.services_btn_font}>
              Функциональный дизайн. Нанесение указателей, вывесок
            </a>
            <a href="/" className={styles.services_btn_font}>
              Печать фотографий и коллажей
            </a>
          </div>
        </div>
        <div className={styles.big_btn_container}>
          {/*Большие кнопки */}
          <button className={styles.big_btn_font}>О студии</button>
          <button className={styles.big_btn_font}>Портфолио</button>
          <button className={styles.big_btn_font}>Блог</button>
          <button className={styles.big_btn_font}>Контакты</button>
        </div>
        <div className={styles.infoSocial_container}>
          {/*info social  */}
          <div>
            <h6 className={styles.info_smalltext_font}>Позвонить нам:</h6>
            <h2 className={styles.info_bigtext_font}>+7 (555) 888-98-66</h2>
          </div>
          <div>
            <h6 className={styles.info_smalltext_font}>Написать нам</h6>
            <h2 className={styles.info_bigtext_font}>info@stenoprint.ru</h2>
          </div>
          <div className={styles.social_container}>
            <a href="http://instagram.com">
              <img src={insta} alt="" />
            </a>
            <a href="http://vk.com">
              <img src={vk} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rights_container}>
        <p className={styles.p}>© 2022 StenoPrint. Все права защищены.</p>
        <p className={styles.p}>
          Сделано в <img src={ruso} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
