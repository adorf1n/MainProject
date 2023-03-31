import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './Card.module.scss';

interface CardProps {
  title: string;
  image: string;
  intro: string;
  text: string;
  views: number;
  publish: Date;
}
const data: Date = new Date();
const Card = ({ title, image, intro, text, views, publish }: CardProps) => {
  return (
    <>
      <div className={styles.child_container_1}>
        <div
          className={styles.block_img + ' ' + styles.block_img_1}
          style={{ background: `url(${image})` }}
        >
          <button className={styles.btn_img}>{title}</button>
        </div>
        <div className={styles.text_container}>
          <h6 className={styles.h6}>{intro}</h6>
          <p className={styles.p}>{text.substring(0, 150) + '...'}</p>
          <div className={styles.info_views}>
            <div className={styles.icon}>
              <span>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.63574 3.52734C7.71777 3.52734 7.7998 3.5 7.88184 3.5C9.33105 3.5 10.5068 4.67578 10.5068 6.125C10.5068 7.57422 9.33105 8.75 7.88184 8.75C6.40527 8.75 5.25684 7.57422 5.25684 6.125C5.25684 6.07031 5.25684 5.98828 5.25684 5.90625C5.50293 6.04297 5.80371 6.125 6.13184 6.125C7.08887 6.125 7.88184 5.35938 7.88184 4.375C7.88184 4.07422 7.77246 3.77344 7.63574 3.52734ZM13.1318 2.21484C14.417 3.39062 15.2646 4.8125 15.6748 5.79688C15.7568 6.01562 15.7568 6.26172 15.6748 6.48047C15.2646 7.4375 14.417 8.85938 13.1318 10.0625C11.8467 11.2656 10.0693 12.25 7.88184 12.25C5.66699 12.25 3.88965 11.2656 2.60449 10.0625C1.31934 8.85938 0.47168 7.4375 0.0615234 6.48047C-0.0205078 6.26172 -0.0205078 6.01562 0.0615234 5.79688C0.47168 4.8125 1.31934 3.39062 2.60449 2.21484C3.88965 1.01172 5.66699 0 7.88184 0C10.0693 0 11.8467 1.01172 13.1318 2.21484ZM7.88184 2.1875C5.69434 2.1875 3.94434 3.96484 3.94434 6.125C3.94434 8.3125 5.69434 10.0625 7.88184 10.0625C10.042 10.0625 11.8193 8.3125 11.8193 6.125C11.8193 3.96484 10.042 2.1875 7.88184 2.1875Z"
                    fill="#828299"
                  />
                </svg>
              </span>
              <span className={styles.views}>{views}</span>
            </div>
            <span className={styles.views}>
              {format(data, 'MM LLL yyyy', { locale: ru })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
