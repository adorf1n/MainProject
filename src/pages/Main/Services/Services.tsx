import styles from './Services.module.scss';
import arrow from './img/arrow.svg';

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
              Узнать подробнее
              <img src={arrow} alt="" />
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
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее <img src={arrow} alt="" />
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
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее
              <img src={arrow} alt="" />
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
              Итальянские технологии холодного трансфера и другие бесшовные
              покрытия.
            </p>
            <button className={styles.btn}>
              Узнать подробнее <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
