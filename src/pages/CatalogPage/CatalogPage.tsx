import { useCallback, useEffect, useState } from 'react';

import { Accordion } from '../../shared/Accordion';
import { IGoods } from '../../types/goods';
import { fetchGoods } from './../../API/request';
import CatalogFilter from './CatalogFilter/CatalogFilter';
import {
  filterCollectionData,
  filterColorsData,
} from './CatalogFilter/filterdata';
import styles from './CatalogPage.module.scss';
import GoodCard from './GoodCard/GoodCard';
import WallpaperType from './WallpaperType/WallpaperType';
import house from './img/house.svg';

const CatalogPage = () => {
  const [goods, setGoods] = useState<IGoods[]>([]);
  const [filteredGoods, setFilteredGoods] = useState<{
    [key: string]: string[];
  }>({
    // collection': ['aquamrine', 'jggfgfghf']
  });
  useEffect(() => {
    fetchGoods().then((data) => setGoods(data.data));
  }, []);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const updateFilter = { ...filteredGoods };
    if (!(type in filteredGoods)) {
      updateFilter[type] = [];
    }

    let updateType = [...updateFilter[type]];

    if (e.target.checked) {
      updateType = [...updateType, e.target.value];
    } else {
      updateType.splice(updateFilter[type].indexOf(e.target.value), 1);
    }

    updateFilter[type] = updateType;

    // if (e.target.checked) {
    //   updateFilter = {};
    // }
    setFilteredGoods(updateFilter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.page_title}>
        <div className={styles.page_title_smtext}>
          <h6 className={styles.h6}>
            <img src={house} alt="" />
            <span>/</span>
            <span>Каталог товаров</span>
          </h6>
        </div>
        <h1>Каталог товаров</h1>
      </div>
      <WallpaperType
        count_designWallpapers={100}
        count_vinylwallpapers={72}
        count_brandedwallpapers={11}
      />
      <div className={styles.goodsFilter_container}>
        <Accordion title="Коллекция">
          <CatalogFilter
            onChange={changeHandler}
            type="collection"
            data={filterCollectionData}
          />
        </Accordion>
        <Accordion title="Цвета">
          <CatalogFilter
            onChange={changeHandler}
            type="colors"
            data={filterColorsData}
          />
        </Accordion>
        {goods.map((goods) => {
          return <GoodCard key={goods.id} {...goods} id={goods.id} />;
        })}
      </div>
    </div>
  );
};

export default CatalogPage;
