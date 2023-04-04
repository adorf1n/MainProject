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
  // const router = useR

  return (
    <div>
      <img src={goodimg} alt="" />
      <div className={styles.text_container}>
        <div>
          <h5 className={styles.h5}>{name}</h5>
          <p className={styles.articulefont}>{item_number}</p>
        </div>
        <div>
          <h6 className={styles.h6}>{price} /м2</h6>
          <p className={styles.p}>{crossed_price} /м2 </p>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
