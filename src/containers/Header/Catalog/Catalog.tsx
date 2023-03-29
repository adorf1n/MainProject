import { NavLink } from 'react-router-dom';

import styles from './Catalog.module.scss';

const Catalog = ({ displayCatalog, keepMountedOpen, onClose }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.child_container}>
        <div className={styles.div1}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
          </div>
        </div>
        <div className={styles.div2}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
          </div>
        </div>
        <div className={styles.div3}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
          </div>
        </div>
        <div className={styles.div4}>
          <h3 className={styles.h3}>Дизайнерские обои</h3>
          <div className={styles.btn_container}>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Дизайнерские обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Фирменные обои
            </NavLink>
            <NavLink onClick={onClose} to="/">
              Виниловые обои
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
