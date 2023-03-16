import Offer from './../Main/Offer/Offer';
import styles from './ContactsPage.module.scss';
import house from './img/house.svg';
import insta from './img/insta.svg';
import telegram from './img/telegram.svg';
import whatsapp from './img/whatsapp.svg';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toptext_container}>
        <h6 className={styles.h6 + ' ' + styles.h6_flex}>
          <img src={house} alt="" />/
          <span className={styles.span}>Контакты</span>
        </h6>
        <h1 className={styles.h1}>Контакты</h1>
      </div>
      <div className={styles.address_container}>
        <div className={styles.address_text_container}>
          <div className={styles.address_text_1_container}>
            <h6 className={styles.h6}>Адрес:</h6>
            <h5 className={styles.h5}>
              Москва, ул. Новая Басманная, дом 18, строение 2
            </h5>
          </div>
          <div className={styles.address_text_2_container}>
            <div>
              <h6 className={styles.h6}>Телефон: </h6>
              <h2 className={styles.h2}>+7 (495) 150-24-68</h2>
            </div>
            <div>
              <h6 className={styles.h6}>E-mail:</h6>
              <h2 className={styles.h2}>zakaz@stenoprint.ru</h2>
            </div>
          </div>
          <div className={styles.social_container}>
            <a className={styles.a} href="/">
              <img src={telegram} alt="" />
            </a>
            <a className={styles.a} href="/">
              <img src={insta} alt="" />
            </a>
            <a className={styles.a} href="/">
              <img src={whatsapp} alt="" />
            </a>
          </div>
          <div className={styles.address_worktime_container}>
            <span className={styles.span}>Время работы:</span>{' '}
            <span className={styles.span}>Пн - Пт: 9:00 - 18:00</span>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22049.697233877763!2d74.55152682577399!3d42.899747194594454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1678947642021!5m2!1sru!2skg"
          ></iframe>
        </div>
      </div>
      <Offer />
    </div>
  );
};

export default ContactsPage;
