import React from 'react';
import style from './Founder.module.css';

const Founder = () => {


    return (
        <section className={style['section']}>
            <div className={style['block-text']}>
                <h1>Привет, меня зовут Аня.</h1>
                <p>Я являюсь основателем и одним из менторов нашей дружной компании HSchool. Будем рады видеть вас в числе наших студентов. Добро пожаловать!</p>
            </div>
            <div className={style['img']}></div>
        </section>
    );
};

export default Founder;
