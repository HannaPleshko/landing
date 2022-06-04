import React from 'react';
import BenefitItem from './BenefitItem';
import style from './KeyBenefits.module.css';

const KeyBenefits = () => {
    let benefits = [{
        h3: 'Максимум практики',
        p: 'Минимум скучной теории и максимум практики. Слушатели получают прикладные знания в процессе выполнения проектов.'
    }, {
        h3: 'Мини группы',
        p: 'Наши занятия походят в небольших группах, где преподаватель уделяет достаточно внимание каждому слушателю. Также есть возможность индивидуального обучения.'
    }, {
        h3: 'Актуальные программы обучения',
        p: 'Мы меняем программы обучения вместе с изменениями в мире IT. Таким образом ты будешь изучать только актуальную информацию и получишь навыки, необходимые для должности Senior JS Developer.'
    }, {
        h3: 'Всестороннее развитие',
        p: 'Мы поможем тебе прокачать soft skills, чтобы помочь легко проходить собеседования, эффективно работать в команде и вырабатывать необходимые личностные качества для карьерного роста.'
    }]

    return (
        <section className={style['section-key']}>
            <h1>Наши преимущества</h1>
            <p className={style['section-info']}>HSchool предлагает полное сопровождение всем желающим освоить новые направления в сфере IT. </p>
            <ul>{benefits.map((item, index) => <BenefitItem key={index} benefit={item} {...item} />)}</ul>
        </section>
    );
};

export default KeyBenefits;