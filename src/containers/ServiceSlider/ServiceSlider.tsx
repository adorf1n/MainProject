import { useCallback, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchSlider } from './../../API/request';
import styles from './ServiceSlider.module.scss';
import ServiceSliderTemplate from './ServiceSliderTemplate';
import { IData } from './slider';

const ServiceSlider = () => {
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

  const [sliderData, setSliderData] = useState<IData[]>([]);

  useEffect(() => {
    fetchSlider().then((data) => {
      data && setSliderData(data.data);
    });
  }, []);

  return (
    <div className={styles.swiper_container}>
      {!!sliderData.length && (
        <>
          <Swiper
            ref={sliderRef}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {sliderData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ServiceSliderTemplate {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={styles.swiperbtn_container}>
            <button onClick={handlePrev}>
              <IoIosArrowBack className={styles.swiper_arrow} />
            </button>
            <button onClick={handleNext}>
              <IoIosArrowForward className={styles.swiper_arrow} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceSlider;
