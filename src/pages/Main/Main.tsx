import Blog from './Blog/Blog';
import Goods from './Goods/Goods';
import Info from './Info/Info';
import Offer from './Offer/Offer';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Usage from './Usage/Usage';

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
