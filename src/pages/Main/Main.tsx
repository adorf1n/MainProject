import Goods from '../../containers/Goods/Goods';
import Services from '../../containers/Services/Services';
import Blog from './../../containers/Blog/Blog';
import Info from './../../containers/Info/Info';
import Offer from './../../containers/Offer/Offer';
import Slider from './../../containers/Slider/Slider';
import Usage from './../../containers/Usage/Usage';

const Main = () => {
  return (
    <div>
      <Slider />
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
