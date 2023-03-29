import { useState } from 'react';

import { postOffer } from '../../../API/request';
import styles from './Offer.module.scss';
import img from './img/1.png';

const Offer = () => {
  const [offerData, setOfferData] = useState({
    name: '',
    phone: '',
  });

  const dataHandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOfferData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.child_container}>
        <h2 className={styles.h2}>Оставьте заявку</h2>
        <h6 className={styles.h6}>
          Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и
          ответит на все интересующие вопросы.
        </h6>
        <div className={styles.inputText_parentcontainer}>
          <div className={styles.inputText_container}>
            <div className={styles.input_flexgrow}>
              <p className={styles.p}>Ваше имя:</p>
              <input
                className={styles.input_font + ' ' + styles.input_container}
                type="text"
                name="name"
                placeholder="Ваше имя"
                onChange={dataHandlerChange}
              />
            </div>
            <div className={styles.input_flexgrow}>
              <p className={styles.p}>Номер телефона:</p>
              <input
                className={styles.input_font + ' ' + styles.input_container}
                type="tel"
                name="phone"
                placeholder="+996 "
                onChange={dataHandlerChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.send_container}>
          <button
            className={
              styles.btn_approval_container + ' ' + styles.btn_approval_font
            }
            onClick={() => postOffer(offerData)}
          >
            Отправить заявку
          </button>
          <p className={styles.approval}>
            Нажимая «отправить», я даю согласие на
            <span>обработку персональных данных</span>
          </p>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Offer;
