/* eslint-disable react/jsx-pascal-case */
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
          <img src={house} alt="" />
          <h6 className={styles.h6}>/ О студии</h6>
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
