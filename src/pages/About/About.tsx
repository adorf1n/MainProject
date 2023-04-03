/* eslint-disable react/jsx-pascal-case */
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import InfoBlocks from './../Main/InfoBlocks/InfoBlocks';
import Offer from './../Main/Offer/Offer';
import styles from './About.module.scss';
import Techniq_cont from './Techniq_cont';
import activity1 from './img/activity1.png';
import activity2 from './img/activity2.png';
import house from './img/house.svg';
import img1 from './img/img1.png';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toptext_container}>
        <div className={styles.toptext_smtext}>
          <Breadcrumb.Item href="http://localhost:5173/" className={styles.li}>
            {' '}
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9766 6.75L12 10.5C12 11.3438 11.3203 12 10.5 12H3C2.15625 12 1.5 11.3438 1.5 10.5V6.75H0.75C0.328125 6.75 0 6.42188 0 6C0 5.78906 0.0703125 5.60156 0.234375 5.4375L6.23437 0.210938C6.39844 0.046875 6.58594 0 6.75 0C6.91406 0 7.10156 0.0703125 7.24219 0.1875L13.2187 5.4375C13.4062 5.60156 13.5 5.78906 13.4766 6C13.4766 6.42188 13.125 6.75 12.7266 6.75H11.9766ZM5.8125 4.5C5.48437 4.5 5.25 4.75781 5.25 5.0625V6.9375C5.25 7.26562 5.48437 7.5 5.8125 7.5H7.6875C7.99219 7.5 8.25 7.26562 8.25 6.9375V5.0625C8.25 4.75781 7.99219 4.5 7.6875 4.5H5.8125Z"
                fill="#828299"
              />
            </svg>
          </Breadcrumb.Item>
          <span>/</span>
          <Breadcrumb.Item active className={styles.li}>
            О студии
          </Breadcrumb.Item>
        </div>
        <h1 className={styles.h1}>О студии</h1>
        <h5 className={styles.h5}>
          Используем различные технологии нанесения изображений. В нашем
          арсенале немецкое оборудование, Итальянские технологии холодного
          трансфера и другие бесшовные покрытия.
        </h5>
      </div>
      <div className={styles.info_container}>
        <img src={img1} alt="" />
        <div className={styles.info_text_container}>
          <h2 className={styles.h2}>Создаем красивые стены</h2>
          <p className={styles.p}>
            Но базовый вектор развития влечет за собой процесс внедрения и
            модернизации соответствующих условий активизации. В целом, конечно,
            сплочённость команды профессионалов требует определения и уточнения
            поставленных обществом задач.
            <p>
              Разнообразный и богатый опыт говорит нам, что внедрение
              современных методик представляет собой интересный эксперимент
              проверки кластеризации усилий. Предварительные выводы
              неутешительны: базовый вектор развития создаёт предпосылки для
              дальнейших направлений развития. Не следует, однако, забывать, что
              граница обучения кадров прекрасно подходит для реализации
              своевременного выполнения сверхзадачи. Разнообразный и богатый
              опыт говорит нам, что высокое качество позиционных исследований, а
              также свежий взгляд на привычные вещи — безусловно открывает новые
              горизонты для позиций, занимаемых участниками в отношении
              поставленных задач. Принимая во внимание показатели успешности,
              реализация намеченных плановых заданий в значительной степени
              обусловливает важность анализа существующих паттернов поведения.
              поставленных обществом задач.
            </p>
          </p>
        </div>
      </div>
      <InfoBlocks />
      <Techniq_cont />
      <div className={styles.activity_container}>
        <div className={styles.activity_toptext}>
          <h2 className={styles.h2}>Наша активность</h2>
          <p className={styles.p}>
            Наша команда принимает активное участие в бизнес-мероприятиях, внося
            вклад в развитие отрасли вертикальной печати в России
          </p>
        </div>
        <div className={styles.activity_img_container}>
          <img src={activity2} alt="" />
          <img src={activity1} alt="" />
        </div>
      </div>
      <Offer />
    </div>
  );
};

export default About;
