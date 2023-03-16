import styles from './Blog.module.scss';
import eye from './img/eye.svg';

const Blog = () => {
  return (
    <div>
      <div className={styles.h1_container}>
        <h1 className={styles.h1}>Блог</h1>
      </div>
      <div className={styles.parent_container}>
        <div className={styles.child_container_1}>
          <div className={styles.block_img + ' ' + styles.block_img_1}>
            <div className={styles.block_img_sign}>Антигравийная пленка</div>
          </div>
          <div className={styles.text_container}>
            <h6 className={styles.h6}>
              Как бы то ни было, граница обучения кадров ни к чему нас не
              обязывает
            </h6>
            <p className={styles.p}>
              {`Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены. Однозначно, активно развивающиеся страны третьего мира,
              превозмогая сложившуюся непростую экономическую ситуацию, указаны
              как претенденты на роль ключевых факторов. Имеется спорная точка
              зрения, гласящая примерно следующее: ключевые особенности структуры
              проекта, инициированные исключительно синтетически, превращены в
              посмешище, хотя само их существование приносит несомненную пользу
              обществу.`.substring(0, 140) + '...'}
            </p>
            <div className={styles.stats_container}>
              <div className={styles.stats_view_container}>
                <img src={eye} alt="" />
                <p className={styles.stats_view}>3833</p>
              </div>
              <p className={styles.stats_date}>22 января 2023</p>
            </div>
          </div>
        </div>
        <div className={styles.child_container_2}>
          <div className={styles.block_img + ' ' + styles.block_img_2}>
            <div className={styles.block_img_sign}>Антигравийная пленка</div>
          </div>
          <div className={styles.text_container}>
            <h6 className={styles.h6}>
              Как бы то ни было, граница обучения кадров ни к чему нас не
              обязывает
            </h6>
            <p className={styles.p}>
              {`Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены. Однозначно, активно развивающиеся страны третьего мира,
              превозмогая сложившуюся непростую экономическую ситуацию, указаны
              как претенденты на роль ключевых факторов. Имеется спорная точка
              зрения, гласящая примерно следующее: ключевые особенности структуры
              проекта, инициированные исключительно синтетически, превращены в
              посмешище, хотя само их существование приносит несомненную пользу
              обществу.`.substring(0, 140) + '...'}
            </p>
            <div className={styles.stats_container}>
              <div className={styles.stats_view_container}>
                <img src={eye} alt="" />
                <p className={styles.stats_view}>3833</p>
              </div>
              <p className={styles.stats_date}>22 января 2023</p>
            </div>
          </div>
        </div>
        <div className={styles.child_container_3}>
          <div className={styles.block_img + ' ' + styles.block_img_3}>
            <div className={styles.block_img_sign}>Антигравийная пленка</div>
          </div>
          <div className={styles.text_container}>
            <h6 className={styles.h6}>
              Как бы то ни было, граница обучения кадров ни к чему нас не
              обязывает
            </h6>
            <p className={styles.p}>
              {`Есть над чем задуматься: акционеры крупнейших компаний будут
              разоблачены. Однозначно, активно развивающиеся страны третьего мира,
              превозмогая сложившуюся непростую экономическую ситуацию, указаны
              как претенденты на роль ключевых факторов. Имеется спорная точка
              зрения, гласящая примерно следующее: ключевые особенности структуры
              проекта, инициированные исключительно синтетически, превращены в
              посмешище, хотя само их существование приносит несомненную пользу
              обществу.`.substring(0, 140) + '...'}
            </p>
            <div className={styles.stats_container}>
              <div className={styles.stats_view_container}>
                <img src={eye} alt="" />
                <p className={styles.stats_view}>3833</p>
              </div>
              <p className={styles.stats_date}>22 января 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slider_container}>
        <button className={styles.moreinf_btn}>Смотреть весь блог</button>
      </div>
    </div>
  );
};

export default Blog;
