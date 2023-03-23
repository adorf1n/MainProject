import inputfileicon from '../img/inputfileicon.svg';
import styles from './BigOffer.module.scss';

const BigOffer = () => {
  return (
    <div className={styles.big_offer_container}>
      <div className={styles.title_container}>
        <h2 className={styles.title_h2}>
          Отправьте нам свой дизайн на проверку или создайте собственный дизайн
          обоев
        </h2>
        <p className={styles.title_p}>
          Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и
          ответит на все интересующие вопросы.
        </p>
      </div>
      <div className={styles.inputs_container}>
        <div className={styles.checkbox_container}>
          <h6 className={styles.checkbox_h6}>У вас есть свой дизайн?</h6>
          <button className={styles.btn_approve}>
            Да, отправить на проверку
          </button>
          <button className={styles.btn_reject}>
            Нет, нужна помощь дизайнера
          </button>
        </div>
        <div className={styles.input_file_container}>
          <h6 className={styles.h6}>Загрузите ваш дизайн:</h6>
          <label className={styles.input_file_label} htmlFor="input_file">
            <input
              className={styles.input_file}
              type="file"
              name=""
              id="input_file"
            />
            <span className={styles.input_file_icons}>
              <img
                className={styles.input_file_icon}
                src={inputfileicon}
                width="25"
                alt=""
              />
            </span>
            <span className={styles.input_font}>Прикрепить файл...</span>
          </label>
        </div>
        <div className={styles.input_text_container}>
          <h6 className={styles.h6}>Ваше имя:</h6>
          <input
            className={styles.input_font + ' ' + styles.input_text}
            type="text"
            name=""
            placeholder="Иван"
          />
        </div>
        <div className={styles.input_phone_container}>
          <h6 className={styles.h6}>Номер телефона:</h6>
          <input
            className={styles.input_phone + ' ' + styles.input_font}
            type="tel"
            name=""
            placeholder="+996"
          />
        </div>
        <button className={styles.fullapprove_btn}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default BigOffer;
