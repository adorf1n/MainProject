import { IData } from '../../../containers/Sliders/slideData';
import styles from './Slider.module.scss';

const Slider = ({ title, text, bgimg }: IData) => {
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

export default Slider;
