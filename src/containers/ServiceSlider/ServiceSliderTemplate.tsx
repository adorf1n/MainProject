import styles from './ServiceSlider.module.scss';
import { IData } from './slider';

const ServiceSliderTemplate = ({
  text,
  createdAt,
  id,
  title,
  publishedAt,
  updatedAt,
  bgimg,
}: IData) => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.text_bigfont}>{title}</h1>
        <h4 className={styles.text_smallfont}>{text}</h4>
        <button className={styles.btn_container + ' ' + styles.btn_font}>
          Узнать подробнее
        </button>
      </div>
    </div>
  );
};

export default ServiceSliderTemplate;
