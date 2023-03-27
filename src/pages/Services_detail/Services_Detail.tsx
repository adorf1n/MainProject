/* eslint-disable react/jsx-pascal-case */
import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PointsData } from '../../containers/Points/PointsData';
import Techniq_cont from '../About/Techniq_cont';
import InfoBlocks from '../Main/InfoBlocks/InfoBlocks';
import Offer from '../Main/Offer/Offer';
import ImgBlock from './../../containers/ImgBlock/ImgBlock';
import Points from './../../containers/Points/Points';
import ServiceSlider from './../../containers/ServiceSlider/ServiceSlider';
import BigOffer from './BigOffer/BigOffer';
import { IQuestionData, QuestionData } from './Questions';
import Questions from './Questions/Questions';
import styles from './Services_Detail.module.scss';
import block1 from './img/1block.png';
import house from './img/house.svg';

const Services_Detail = () => {
  const [list, setList] = useState<IQuestionData[] | []>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    if (QuestionData.length) {
      setList(() => {
        return QuestionData.map((item) => {
          return {
            ...item,
            collapse: false,
          };
        });
      });
    }
  }, []);

  const col1: any = [];
  const col2: any = [];

  list.forEach((item, index) => {
    const question = (
      <Questions
        key={item.id}
        title={item.title}
        collapse={Boolean(item.collapse)}
        click={() => collapseHandler(item.id)}
      >
        {item.text}
      </Questions>
    );
    if (index % 2 === 0) {
      col1.push(question);
    } else {
      col2.push(question);
    }
  });

  const collapseHandler = useCallback((id: number) => {
    setList((prev) => {
      return prev.map((item) => {
        const copy = { ...item };
        if (copy.id === id) {
          copy.collapse = !copy.collapse;
        }
        return copy;
      });
    });
  }, []);

  return (
    <div>
      <ServiceSlider />
      <div className={styles.decor_container}>
        <div className={styles.toptext_container}>
          <h6 className={styles.h6_cont}>
            <NavLink to="/">
              <img src={house} alt="" />
            </NavLink>
            <span className={styles.span}>/</span>
            <span className={styles.span}>Услуги</span>
            <span className={styles.span}>/</span>
            <span className={styles.span}>
              Оформление офисов и коммерческих помещений в фирменном стиле
            </span>
          </h6>
          <h1 className={styles.h1}>
            Оформление офисов и коммерческих помещений в фирменном стиле
          </h1>
          <h5 className={styles.h5}>
            Используем различные технологии нанесения изображений. В нашем
            арсенале немецкое оборудование, Итальянские технологии холодного
            трансфера и другие бесшовные покрытия.
          </h5>
        </div>
        <div className={styles.block1_container}>
          <img src={block1} alt="" />
          <div className={styles.block1_text}>
            <h2 className={styles.h2}>Дизайнерские обои вашей мечты</h2>
            Но базовый вектор развития влечет за собой процесс внедрения и
            модернизации соответствующих условий активизации. В целом, конечно,
            сплочённость команды профессионалов требует определения и уточнения
            поставленных обществом задач.
            <span className={styles.block1_span}>
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
            </span>
          </div>
        </div>
        <InfoBlocks />
        <Techniq_cont />
        <div className={styles.points_container}>
          {PointsData.map((item) => {
            return <Points key={item.id} {...item} />;
          })}
        </div>
        <BigOffer />
        <ImgBlock />
        <Offer />
        <div>
          <h1 className={styles.questions_h1}>Популярные вопросы</h1>
          <div className={styles.questions_container}>
            <div>{col1}</div>
            <div>{col2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_Detail;
