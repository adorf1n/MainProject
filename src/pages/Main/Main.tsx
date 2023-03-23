import Sliders from './../../containers/Sliders/Sliders';
import Blog from './Blog/Blog';
import Goods from './Goods/Goods';
import Info from './Info/Info1block';
import styles from './Main.module.scss';
import Offer from './Offer/Offer';
import Services from './Services/Services';
import Usage from './Usage/Usage';

const Main = () => {
  return (
    <div className={styles.container}>
      <Sliders />
      <Info />
      <Services />
      <Goods />
      <Usage />
      <Offer />
      <Blog />
    </div>
  );
};

export default Main;
