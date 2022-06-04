import React from 'react';
import style from './Benefits.module.css';
import KeyBenefits from '../KeyBenefits/KeyBenefits';

const Benefits = () => {

    return (
        <section className={style['section']}>
            <div className={style['oval-left']}></div>
            <div className={style['container']}>
                <ul className={style['block-ul']}>
                    <li>
                        <h3>50</h3>
                        <p>счастливых студентов</p>
                    </li>
                    <li>
                        <h3>2177</h3>
                        <p>лекций</p>
                    </li>
                    <li>
                        <h3>50</h3>
                        <p>отзывов</p>
                    </li>
                </ul>
            </div>
            <KeyBenefits />
        </section>
    );
};

export default Benefits;
