import styles from './Questions.module.scss';

interface QuestionsProps {
  children: React.ReactNode;
  title: string;
  collapse: boolean;
  click: () => void;
}
const Questions = ({ children, title, collapse, click }: QuestionsProps) => {
  return (
    <div
      className={styles.container}
      onClick={click}
      role="button"
      aria-hidden="true"
    >
      <div>
        <div className={styles.title}>{title}</div> <img src="" alt="" />
      </div>
      {collapse && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Questions;
