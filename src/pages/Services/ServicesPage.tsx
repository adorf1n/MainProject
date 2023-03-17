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
        <h6 className={styles.smtext}>
          <img src={house} alt="" /> / Услуги
        </h6>
        <h1 className={styles.h1}>Услуги</h1>
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
