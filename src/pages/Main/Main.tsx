import Blog from '../../components/Blog/Blog';
import Card from '../../components/Card/Card';
import Sliders from './../../containers/Sliders/Sliders';
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
      <h1 className={styles.ttitle}>Блог</h1>
      <div className={styles.cards}>
        <Card
          title="Антигравийная пленка"
          image="/img/block1.png"
          text="Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."
          intro="Как бы то ни было, граница обучения кадров ни к чему нас не обязывает"
          publish={new Date()}
          views={3999}
        />
        <Card
          title="Антигравийная пленка"
          image="/img/block1.png"
          text="Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."
          intro="Как бы то ни было, граница обучения кадров ни к чему нас не обязывает"
          publish={new Date()}
          views={3999}
        />
        <Card
          title="Антигравийная пленка"
          image="/img/block1.png"
          text="Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."
          intro="Как бы то ни было, граница обучения кадров ни к чему нас не обязывает"
          publish={new Date()}
          views={3999}
        />
      </div>
    </div>
  );
};

export default Main;
