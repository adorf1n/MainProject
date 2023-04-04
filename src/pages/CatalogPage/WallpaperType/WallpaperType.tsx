import { useEffect, useState } from 'react';

import cn from 'clsx';

import { fetchCatalog } from '../../../API/request';
import { ICategory } from '../../../types/category';
import btn_img from '../img/btn_img.png';
import styles from './WallpaperType..module.scss';

// const categoryList = [
//   { type: 'design', name: 'Дизайнерские', count: 200 },
//   { type: 'vinyl', name: 'Виниловые', count: 100 },
//   { type: 'brand', name: 'Фирменные', count: 59 },
// ];

const WallpaperType = ({
  onSelected,
}: {
  onSelected: (type: string) => void;
}) => {
  const [categoryList, setCategoryList] = useState<ICategory[] | []>([]);
  const [activeBtn, setActiveBtn] = useState<string>('');

  useEffect(() => {
    fetchCatalog().then((data) => setCategoryList(data.data));
  }, []);

  const clicked = (type: string) => () => {
    setActiveBtn(type);
  };

  return (
    <div className={styles.container}>
      {categoryList.map((catalog) => {
        return (
          <button
            key={catalog.type}
            onClick={clicked(catalog.type)}
            className={cn(
              styles.btn_container,
              activeBtn === catalog.type && styles.btn_container_active
            )}
          >
            <img src={btn_img} alt="" />
            <h6>
              {catalog.title}
              <p>100 товаров</p>
            </h6>
          </button>
        );
      })}
    </div>
  );
};

export default WallpaperType;
