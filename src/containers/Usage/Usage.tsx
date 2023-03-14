import styles from './Usage.module.scss';

const Usage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.h2}>Место применения</h2>
        <h5 className={styles.h5}>
          С помощью опыта нашей команды преобразить любые помещения не составит
          труда вне зависимости от масштаба или сложности задачи.
        </h5>
      </div>
      <div className={styles.gridparent}>
        <div className={styles.div_1}>
          <h2 className="todo">добавить слайдер и лупу</h2>
          <div className={styles.block_img + ' ' + styles.block_img_1}></div>
          <div className={styles.block_text}>
            <h6 className={styles.h6}>Жилые помещения</h6>
            <p className={styles.p}>
              Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены.
            </p>
          </div>
        </div>
        <div className={styles.div_2}>
          {' '}
          <div className={styles.block_img + ' ' + styles.block_img_2}></div>
          <div className={styles.block_text}>
            <h6 className={styles.h6}>Офисы, рестораны, кафе</h6>
            <p className={styles.p}>
              Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены.
            </p>
          </div>
        </div>
        <div className={styles.div_3}>
          {' '}
          <div className={styles.block_img + ' ' + styles.block_img_1}></div>
          <div className={styles.block_text}>
            <h6 className={styles.h6}>Жилые помещения</h6>
            <p className={styles.p}>
              Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены.
            </p>
          </div>
        </div>
        <div className={styles.div_4}>
          {' '}
          <div className={styles.block_img + ' ' + styles.block_img_2}></div>
          <div className={styles.block_text}>
            <h6 className={styles.h6}>Офисы, рестораны, кафе</h6>
            <p className={styles.p}>
              Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
