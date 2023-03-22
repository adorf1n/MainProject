/* eslint-disable react/jsx-pascal-case */
import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import InfoBlocks from '../Main/InfoBlocks/InfoBlocks';
import Techniq_cont from './../About/Techniq_cont';
import BigOffer from './BigOffer/BigOffer';
import { IQuestionData, QuestionData } from './Questions';
import Questions from './Questions/Questions';
import { ServiceSliderData } from './ServiceSliderData';
import ServiceSliderTemplate from './ServiceSliderTemplate';
import styles from './ServicesMore.module.scss';
import block1 from './img/1block.png';
import house from './img/house.svg';
import next from './img/next.svg';
import prev from './img/prev.svg';

const ServiceSlider = () => {
  const [list, setList] = useState<IQuestionData[] | []>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
      <div className={styles.swiper_container}>
        <Swiper
          ref={sliderRef}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ServiceSliderData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ServiceSliderTemplate {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.swiperbtn_container}>
          <button onClick={handlePrev}>
            <img className={styles.img} src={prev} alt="" />
          </button>
          <button onClick={handleNext}>
            <img className={styles.img} src={next} alt="" />
          </button>
        </div>
      </div>
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
          <div className={styles.points_block}>
            <h5 className={styles.points_numbering}>01</h5>
            <h4 className={styles.points_title}>Выезд по Москве и области</h4>
            <p className={styles.points_text}>
              Используем различные технологии нанесения изображений. В нашем
              арсенале немецкое оборудование, Итальянские технологии холодного
              трансфера и другие бесшовные покрытия.
            </p>
          </div>
          <div className={styles.points_block}>
            <h5 className={styles.points_numbering}>02</h5>
            <h4 className={styles.points_title}>Работаем по договору</h4>
            <p className={styles.points_text}>
              Используем различные технологии нанесения изображений. В нашем
              арсенале немецкое оборудование, Итальянские технологии холодного
              трансфера и другие бесшовные покрытия.
            </p>
          </div>
          <div className={styles.points_block}>
            <h5 className={styles.points_numbering}>03</h5>
            <h4 className={styles.points_title}>
              Поможем с созданием обработкой изображения
            </h4>
            <p className={styles.points_text}>
              Используем различные технологии нанесения изображений. В нашем
              арсенале немецкое оборудование, Итальянские технологии холодного
              трансфера и другие бесшовные покрытия.
            </p>
          </div>
          <div className={styles.points_block}>
            <h5 className={styles.points_numbering}>04</h5>
            <h4 className={styles.points_title}>Выезд по Москве и области</h4>
            <p className={styles.points_text}>
              Используем различные технологии нанесения изображений. В нашем
              арсенале немецкое оборудование, Итальянские технологии холодного
              трансфера и другие бесшовные покрытия.
            </p>
          </div>
        </div>
        <BigOffer />
        {list.map((item) => {
          return (
            <Questions
              key={item.id}
              title={item.title}
              collapse={Boolean(item.collapse)}
              click={() => collapseHandler(item.id)}
            >
              {item.text}
            </Questions>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSlider;
