import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.text_bigfont}>
          Художественное оформление вертикальных поверхностей
        </h1>

        <h4 className={styles.text_smallfont}>
          Используем различные технологии нанесения изображений. В нашем
          арсенале немецкое оборудование, Итальянские технологии холодного
          трансфера и другие бесшовные покрытия.
        </h4>
        <button className={styles.btn_container + ' ' + styles.btn_font}>
          Узнать подробнее
        </button>
      </div>
    </div>
  );
};

export default Slider;
