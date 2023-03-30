import { NavLink } from 'react-router-dom';

import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child_container}>
        <div className={styles.div1}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
          </div>
        </div>
        <div className={styles.div2}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
          </div>
        </div>
        <div className={styles.div3}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
          </div>
        </div>
        <div className={styles.div4}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
            <NavLink to="/">Дизайнерские обои</NavLink>
            <NavLink to="/">Фирменные обои</NavLink>
            <NavLink to="/">Виниловые обои</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
