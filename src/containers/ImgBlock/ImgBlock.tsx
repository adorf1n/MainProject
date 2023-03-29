import styles from './ImgBlock.module.scss';
import img1 from './img/imgblock1.png';
import img2 from './img/imgblock2.png';
import img3 from './img/imgblock3.png';
import img4 from './img/imgblock4.png';

const ImgBlock = () => {
  return (
    <div className={styles.img_parent}>
      <div className={styles.img_div1}>
        <div className={styles.text_container}>
          <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
          <p>
            Итальянские технологии холодного трансфера и другие бесшовные
            покрытия.
          </p>
        </div>
        <img className={styles.img} src={img1} alt="" />
      </div>
      <div className={styles.img_div2}>
        <div className={styles.text_container}>
          <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
          <p>
            Итальянские технологии холодного трансфера и другие бесшовные
            покрытия.
          </p>
        </div>
        <img className={styles.img} src={img2} alt="" />
      </div>
      <div className={styles.img_div3}>
        <img className={styles.img} src={img3} alt="" />
        <div className={styles.text_container}>
          <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
          <p>
            Итальянские технологии холодного трансфера и другие бесшовные
            покрытия.
          </p>
        </div>
      </div>
      <div className={styles.img_div4}>
        <img className={styles.img} src={img4} alt="" />
        <div className={styles.text_container}>
          <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
          <p>
            Итальянские технологии холодного трансфера и другие бесшовные
            покрытия.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgBlock;
