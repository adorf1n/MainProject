import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Offer from './../Main/Offer/Offer';
import styles from './ContactsPage.module.scss';
import house from './img/house.svg';
import insta from './img/insta.svg';
import telegram from './img/telegram.svg';
import whatsapp from './img/whatsapp.svg';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toptext_smtext}>
        <Breadcrumb.Item href="http://localhost:5173/" className={styles.li}>
          {' '}
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9766 6.75L12 10.5C12 11.3438 11.3203 12 10.5 12H3C2.15625 12 1.5 11.3438 1.5 10.5V6.75H0.75C0.328125 6.75 0 6.42188 0 6C0 5.78906 0.0703125 5.60156 0.234375 5.4375L6.23437 0.210938C6.39844 0.046875 6.58594 0 6.75 0C6.91406 0 7.10156 0.0703125 7.24219 0.1875L13.2187 5.4375C13.4062 5.60156 13.5 5.78906 13.4766 6C13.4766 6.42188 13.125 6.75 12.7266 6.75H11.9766ZM5.8125 4.5C5.48437 4.5 5.25 4.75781 5.25 5.0625V6.9375C5.25 7.26562 5.48437 7.5 5.8125 7.5H7.6875C7.99219 7.5 8.25 7.26562 8.25 6.9375V5.0625C8.25 4.75781 7.99219 4.5 7.6875 4.5H5.8125Z"
              fill="#828299"
            />
          </svg>
        </Breadcrumb.Item>
        <span>/</span>
        <Breadcrumb.Item active className={styles.li}>
          Контакты
        </Breadcrumb.Item>
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
