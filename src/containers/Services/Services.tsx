import { NavLink } from 'react-router-dom';

import styles from './Services.module.scss';

const Services = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>Наши услуги</h1>
        <h4 className={styles.h4}>
          С помощью опыта нашей команды преобразить любые помещения не составит
          труда вне зависимости от масштаба или сложности задачи.
        </h4>
      </div>
      <div className={styles.blocks_container}>
        <div className={styles.block}>
          <div className={styles.img + ' ' + styles.img_1}></div>
          <div className={styles.block_children}>
            <h6 className={styles.h6 + ' ' + styles.h6_font}>
              Создание уникального дизайна в квартире, доме, офисе
            </h6>
            <p className={styles.p + styles.p_font}>
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее{' '}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79493 0.527352L6.62013 5.56348C6.72559 5.69532 6.8047 5.85352 6.8047 6.01173C6.8047 6.16993 6.72559 6.32813 6.62013 6.4336L1.79493 11.4697C1.55763 11.7334 1.13575 11.7334 0.898446 11.4961C0.634774 11.2588 0.634774 10.8633 0.872078 10.5996L5.30177 5.98536L0.872078 1.39747C0.634774 1.16016 0.634774 0.738289 0.898446 0.500985C1.13575 0.26368 1.55763 0.26368 1.79493 0.527352Z"
                  fill="#FF2E51"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.img + ' ' + styles.img_2}></div>
          <div className={styles.block_children}>
            <h6 className={styles.h6 + ' ' + styles.h6_font}>
              Оформление офисов и коммерческих помещений в фирменном стиле
            </h6>
            <p className={styles.p + styles.p_font}>
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее{' '}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79493 0.527352L6.62013 5.56348C6.72559 5.69532 6.8047 5.85352 6.8047 6.01173C6.8047 6.16993 6.72559 6.32813 6.62013 6.4336L1.79493 11.4697C1.55763 11.7334 1.13575 11.7334 0.898446 11.4961C0.634774 11.2588 0.634774 10.8633 0.872078 10.5996L5.30177 5.98536L0.872078 1.39747C0.634774 1.16016 0.634774 0.738289 0.898446 0.500985C1.13575 0.26368 1.55763 0.26368 1.79493 0.527352Z"
                  fill="#FF2E51"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.img + ' ' + styles.img_3}></div>
          <div className={styles.block_children}>
            <h6 className={styles.h6 + ' ' + styles.h6_font}>
              Функциональный дизайн. Нанесение указателей, вывесок
            </h6>
            <p className={styles.p + styles.p_font}>
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее{' '}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79493 0.527352L6.62013 5.56348C6.72559 5.69532 6.8047 5.85352 6.8047 6.01173C6.8047 6.16993 6.72559 6.32813 6.62013 6.4336L1.79493 11.4697C1.55763 11.7334 1.13575 11.7334 0.898446 11.4961C0.634774 11.2588 0.634774 10.8633 0.872078 10.5996L5.30177 5.98536L0.872078 1.39747C0.634774 1.16016 0.634774 0.738289 0.898446 0.500985C1.13575 0.26368 1.55763 0.26368 1.79493 0.527352Z"
                  fill="#FF2E51"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.img + ' ' + styles.img_4}></div>
          <div className={styles.block_children}>
            <h6 className={styles.h6 + ' ' + styles.h6_font}>
              Печать фотографий и коллажей
            </h6>
            <p className={styles.p + styles.p_font}>
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее{' '}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79493 0.527352L6.62013 5.56348C6.72559 5.69532 6.8047 5.85352 6.8047 6.01173C6.8047 6.16993 6.72559 6.32813 6.62013 6.4336L1.79493 11.4697C1.55763 11.7334 1.13575 11.7334 0.898446 11.4961C0.634774 11.2588 0.634774 10.8633 0.872078 10.5996L5.30177 5.98536L0.872078 1.39747C0.634774 1.16016 0.634774 0.738289 0.898446 0.500985C1.13575 0.26368 1.55763 0.26368 1.79493 0.527352Z"
                  fill="#FF2E51"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
