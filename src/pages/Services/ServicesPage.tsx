import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router-dom';

import styles from './ServicesPage.module.scss';
import arrow from './img/arrow.svg';
import house from './img/house.svg';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toptext_container}>
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
            Услуги
          </Breadcrumb.Item>
        </div>
        <h6 className={styles.h6}>
          Используем различные технологии нанесения изображений. В нашем
          арсенале немецкое оборудование, Итальянские технологии холодного
          трансфера и другие бесшовные покрытия.
        </h6>
      </div>
      <div className={styles.parent_container}>
        <div className={styles.div1}>
          <img src={img1} alt="" />
          <div className={styles.text_container}>
            <h2 className={styles.h2}>
              Создание уникального дизайна в квартире, доме, офисе
            </h2>
            <p className={styles.p}>
              Разнообразный и богатый опыт говорит нам, что внедрение
              современных методик представляет собой интересный эксперимент
              проверки кластеризации усилий. Предварительные выводы
              неутешительны: базовый вектор развития создаёт предпосылки для
              дальнейших направлений развития. Не следует, однако, забывать, что
              граница обучения кадров прекрасно подходит для реализации
              своевременного выполнения сверхзадачи.
            </p>
            <NavLink className={styles.btn_font} to="/services/more">
              Узнать подробнее <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className={styles.div2}>
          <img src={img2} alt="" />
          <div className={styles.text_container}>
            <h2 className={styles.h2}>
              Оформление офисов и коммерческих помещений в фирменном стиле
            </h2>
            <p className={styles.p}>
              Разнообразный и богатый опыт говорит нам, что внедрение
              современных методик представляет собой интересный эксперимент
              проверки кластеризации усилий. Предварительные выводы
              неутешительны: базовый вектор развития создаёт предпосылки для
              дальнейших направлений развития. Не следует, однако, забывать, что
              граница обучения кадров прекрасно подходит для реализации
              своевременного выполнения сверхзадачи.
            </p>
            <NavLink className={styles.btn_font} to="/services/more">
              Узнать подробнее <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className={styles.div3}>
          <img src={img3} alt="" />
          <div className={styles.text_container}>
            <h2 className={styles.h2}>
              Функциональный дизайн. Нанесение указателей, вывесок
            </h2>
            <p className={styles.p}>
              Разнообразный и богатый опыт говорит нам, что внедрение
              современных методик представляет собой интересный эксперимент
              проверки кластеризации усилий. Предварительные выводы
              неутешительны: базовый вектор развития создаёт предпосылки для
              дальнейших направлений развития. Не следует, однако, забывать, что
              граница обучения кадров прекрасно подходит для реализации
              своевременного выполнения сверхзадачи.
            </p>
            <NavLink className={styles.btn_font} to="/services/more">
              Узнать подробнее <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className={styles.div4}>
          <img src={img4} alt="" />
          <div className={styles.text_container}>
            <h2 className={styles.h2}>Печать фотографий и коллажей</h2>
            <p className={styles.p}>
              Разнообразный и богатый опыт говорит нам, что внедрение
              современных методик представляет собой интересный эксперимент
              проверки кластеризации усилий. Предварительные выводы
              неутешительны: базовый вектор развития создаёт предпосылки для
              дальнейших направлений развития. Не следует, однако, забывать, что
              граница обучения кадров прекрасно подходит для реализации
              своевременного выполнения сверхзадачи.
            </p>
            <NavLink className={styles.btn_font} to="/services/more">
              Узнать подробнее <img src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
