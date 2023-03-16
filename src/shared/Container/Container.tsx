import styles from './Container.module.scss';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}></div>;
};

export default Container;
