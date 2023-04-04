import styles from './CatalogFilter.module.scss';
import { IFilterCatalog } from './filterdata';

//http://localhost:1337/api/catalogs?filters[filter_collection][$contains]=Amo&filters[filter_material][$eq]=Paper

const CatalogFilter = ({
  data,
  type,
  onChange,
}: {
  data: IFilterCatalog[];
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.collection_container}>
        {data.map((item) => {
          return (
            <label key={item.id}>
              <input
                className={styles.custom_checkbox}
                type="checkbox"
                value={item.value}
                onChange={(e) => onChange(e, type)}
              />
              <p>{item.name}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogFilter;
