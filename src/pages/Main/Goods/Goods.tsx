import styles from './Goods.module.scss';

const Goods = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Популярные товары</h1>
      <div className={styles.btns_container}>
        <button className={styles.btn}>Дизайнерские обои</button>
        <button className={styles.btn}>Виниловые обои</button>
        <button className={styles.btn}>Фирменные обои</button>
      </div>
      <div className={styles.goods_container}>
        {/* общий контейнер для товаров */}
        <div className={styles.goods_childcontainer}>
          <div className={styles.block_img + ' ' + styles.img_1}></div>
          <div className={styles.text_container}>
            <div>
              <h5 className={styles.h5}>Floraison</h5>
              <p className={styles.articulefont}>Артикул: 11039</p>
            </div>
            <div>
              <h6 className={styles.h6}>от 2 552 ₽ / м2</h6>
              <p className={styles.p}>от 3 452 ₽ / м2</p>
            </div>
          </div>
          <div className={styles.btn_dropdown_container}>
            <button className={styles.btn_dropdown_moreinf}>Подробнее</button>
            <button className={styles.btn_dropdown_buy}>Купить в 1 клик</button>
          </div>
        </div>
        <div className={styles.goods_childcontainer}>
          <div className={styles.block_img + ' ' + styles.img_2}></div>
          <div className={styles.text_container}>
            <div>
              <h5 className={styles.h5}>Floraison</h5>
              <p className={styles.articulefont}>Артикул: 11039</p>
            </div>
            <div>
              <h6 className={styles.h6}>от 2 552 ₽ / м2</h6>
              <p className={styles.p}>от 3 452 ₽ / м2</p>
            </div>
          </div>
          <div className={styles.btn_dropdown_container}>
            <button className={styles.btn_dropdown_moreinf}>Подробнее</button>
            <button className={styles.btn_dropdown_buy}>Купить в 1 клик</button>
          </div>
        </div>
        <div className={styles.goods_childcontainer}>
          <div className={styles.block_img + ' ' + styles.img_3}></div>
          <div className={styles.text_container}>
            <div>
              <h5 className={styles.h5}>Floraison</h5>
              <p className={styles.articulefont}>Артикул: 11039</p>
            </div>
            <div>
              <h6 className={styles.h6}>от 2 552 ₽ / м2</h6>
              <p className={styles.p}>от 3 452 ₽ / м2</p>
            </div>
          </div>
          <div className={styles.btn_dropdown_container}>
            <button className={styles.btn_dropdown_moreinf}>Подробнее</button>
            <button className={styles.btn_dropdown_buy}>Купить в 1 клик</button>
          </div>
        </div>
        <div className={styles.goods_childcontainer}>
          <div className={styles.block_img + ' ' + styles.img_4}></div>
          <div className={styles.text_container}>
            <div>
              <h5 className={styles.h5}>Floraison</h5>
              <p className={styles.articulefont}>Артикул: 11039</p>
            </div>
            <div>
              <h6 className={styles.h6}>от 2 552 ₽ / м2</h6>
              <p className={styles.p}>от 3 452 ₽ / м2</p>
            </div>
          </div>
          <div className={styles.btn_dropdown_container}>
            <button className={styles.btn_dropdown_moreinf}>Подробнее</button>
            <button className={styles.btn_dropdown_buy}>Купить в 1 клик</button>
          </div>
        </div>
      </div>
      <div className={styles.btn_watchAll_container}>
        <button className={styles.btn_watchAll}>Смотреть все товары</button>
      </div>
    </div>
  );
};

export default Goods;
