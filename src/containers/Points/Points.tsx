import styles from './Points.module.scss';

const Points = ({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.points_block}>
      <h5 className={styles.points_numbering}>{num}</h5>
      <h4 className={styles.points_title}>{title}</h4>
      <p className={styles.points_text}>{text}</p>
    </div>
  );
};

export default Points;
