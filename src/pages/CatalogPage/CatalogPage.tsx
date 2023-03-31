import WallpaperType from './WallpaperType/WallpaperType';
import house from './img/house.svg';

const CatalogPage = () => {
  return (
    <div>
      <h6>
        <img src={house} alt="" />
        <span>/</span>
        <span>Каталог товаров</span>
      </h6>
      <WallpaperType />
    </div>
  );
};

export default CatalogPage;
