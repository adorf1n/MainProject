import styles from './GoodCard.module.scss';
import goodimg from './goodimg.png';

interface Goods {
  name: string;
  item_number: number;
  price: number;
  crossed_price: number;
  id: number;
}

const GoodCard = ({ name, item_number, price, crossed_price, id }: Goods) => {
  return (
    <div className={styles.container}>
      <img src={goodimg} alt="" />
      <div></div>
      <div className={styles.text_container}>
        <div className={styles.text_left}>
          <h5 className={styles.h5}>{name}</h5>
          <p className={styles.articulefont}>Артикул: {item_number}</p>
        </div>
        <div className={styles.text_right}>
          <h6 className={styles.h6}>от {price} сом / м2</h6>
          <p className={styles.p}>от {crossed_price} сом / м2 </p>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
