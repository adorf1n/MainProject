import { useState } from 'react';

import cn from 'clsx';

import { postBigOffer } from '../../../API/request';
import inputfileicon from '../img/inputfileicon.svg';
import styles from './BigOffer.module.scss';

const BigOffer = () => {
  const [bigOfferData, setBigOfferData] = useState<{
    OwnDesign: boolean;
    name: string;
    phone: string;
    file: File | null;
  }>({
    OwnDesign: false,
    name: '',
    phone: '',
    file: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBigOfferData((prev) => {
      return {
        ...prev,
        file: e.target.files ? e.target.files[0] : null,
      };
    });
  };

  const dataHandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBigOfferData((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.name === 'ownDesign'
            ? Boolean(parseInt(event.target.value))
            : event.target.value,
      };
    });
  };

  const submitHandler = () => {
    const formData = new FormData();
    Object.keys(bigOfferData).forEach((key) => {
      formData.append(key, bigOfferData[key]);
    });

    postBigOffer(FormData);
  };

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
          <div className={styles.checkbox_buttons}>
            <label
              className={cn(
                styles.checkbox_label,
                bigOfferData.ownDesign && styles.checkbox_label_active
              )}
              htmlFor="choicetrue"
            >
              <input
                type="radio"
                id="choicetrue"
                name="ownDesign"
                value={1}
                className={styles.checkbox_input}
                onChange={dataHandlerChange}
              />
              Да, отправить на проверку
            </label>
            <label
              className={cn(
                styles.checkbox_label,
                !bigOfferData.ownDesign && styles.checkbox_label_active
              )}
              htmlFor="choicefalse"
            >
              <input
                type="radio"
                id="choicefalse"
                name="ownDesign"
                value={0}
                className={styles.checkbox_input}
                onChange={dataHandlerChange}
              />
              Нет, нужна помощь дизайнера
            </label>
          </div>
        </div>
        <div className={styles.input_file_container}>
          <h6 className={styles.h6}>Загрузите ваш дизайн:</h6>
          <label className={styles.input_file_label} htmlFor="input_file">
            <input
              className={styles.input_file}
              type="file"
              name=""
              id="input_file"
              onChange={handleFileChange}
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
            onChange={dataHandlerChange}
          />
        </div>
        <div className={styles.input_phone_container}>
          <h6 className={styles.h6}>Номер телефона:</h6>
          <input
            className={styles.input_phone + ' ' + styles.input_font}
            type="tel"
            name=""
            placeholder="+996"
            onChange={dataHandlerChange}
          />
        </div>
        <button className={styles.fullapprove_btn} onClick={submitHandler}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default BigOffer;
