import { useCallback, useRef } from 'react';

import { Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import Slider from './../../pages/Main/Slider/Slider';
import styles from './Sliders.module.scss';
import next from './img/next.svg';
import prev from './img/prev.svg';
import { slideData } from './slideData';

const Sliders = () => {
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

  return (
    <div className={styles.swiper_container}>
      <Swiper
        ref={sliderRef}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Slider {...item} />
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
  );
};

export default Sliders;
