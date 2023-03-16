import styles from './InfoBlocks.module.scss';

const InfoBlocks = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.block_container}>
          <div className={styles.block_img + ' ' + styles.img_1}></div>
          <h6 className={styles.h6}>Создаем красивые стены</h6>
          <p className={styles.p}>
            Используем различные технологии нанесения изображений. В нашем
            арсенале немецкое оборудование, Итальянские технологии холодного
            трансфера и другие бесшовные покрытия.
          </p>
        </div>
        <div className={styles.block_container}>
          <div className={styles.block_img + ' ' + styles.img_2}></div>
          <h6 className={styles.h6}>Можно нанести любое изображение</h6>
          <p className={styles.p}>
            В зависимости от выбранной технологии разрешение печати наxнесённого
            изображения может составлять до 1440 dpi
          </p>
        </div>
        <div className={styles.block_container}>
          <div className={styles.block_img + ' ' + styles.img_3}></div>
          <h6 className={styles.h6}>Ваши стены - наш мольберт</h6>
          <p className={styles.p}>
            Наши дизайнеры помогут с выбором качественного изображения либо
            создадут для вас индивидуальный проект с учётом ваших пожеланий.
          </p>
        </div>
        <div className={styles.block_container}>
          <div className={styles.block_img + ' ' + styles.img_4}></div>
          <h6 className={styles.h6}>Обновить стены без ремонта</h6>
          <p className={styles.p}>
            С помощью опыта нашей команды преобразить любые помещения не
            составит труда вне зависимости от масштаба или сложности задачи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlocks;
