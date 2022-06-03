import { Link } from 'react-router-dom';
import video from './assets/IMG_2507.mp4'
import style from './Main.module.css';

const Main = () => {
  return (
    <section>
      <div className={style['container']}>
        <div className={style['block-gradient']}></div>
        <div className={style['block']}>
          <div className={style['text-block']}>
            <h1>Начни карьеру в IT прямо сейчас.</h1>
            <p className={style['text']}>Стать востребованным IT-специалистом вместе с HSchool. </p>
            <Link to={'*'}>
              <div className={style['btn']}>
                Записаться
              </div>
            </Link>
            <div>
              <div className={style['']}></div>
              <p className={style['text-sm']}>Join over <span>4,000+</span> students</p>
            </div>
          </div>
          <div className={style['video-block']}>
            <video className={style['video']} controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
