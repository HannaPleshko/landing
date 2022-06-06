import React from 'react';
import QuestionItem from './QuestionItem';
import style from './Questions.module.css';

const Questions = () => {
    const questions = [{
        h3: 'Сколько времени длится обучение?',
        p: 'В среднем обучение длится 6 месяцев.'
    }, {
        h3: 'Что требуется для того, чтобы поступить на курс?',
        p: 'Курс разработан для новичков, поэтому от тебя требуется лишь уверенное владение компьютером и базовые знания английского языка.'
    }, {
        h3: 'Как будет происходить общение с наставником?',
        p: '2-3 раза в неделю ментор проводит групповые занятия. Если вы плохо усвоили материал. то индивидуальные занятия. Для более срочной связи используется Telegram-чат группы и личные сообщения с ментором.'
    }, {
        h3: 'Какие задания включает курс?',
        p: 'Мы убеждены в том, что залог успеха в обучении любому языку программирования - практика и еще раз практика! Именно поэтому большую часть времени на курсе ты будешь уделять практическим заданиям. Помимо теоретических тестов, каждый раздел содержит в себе множество практических тренажеров, а также работу над несколькими проектами.'
    }, {
        h3: 'В какое время проходят занятия?',
        p: 'График занятий формируется исходя ваших временных возможностей.'
    }, {
        h3: 'Можно ли совмещать курсы программирования с работой?',
        p: 'Как говорит наш основатель: «Нужно искать не причины, а способы».'
    }]

    return (
        <section className={style['section-questions']}>
            <h1>Часто задаваемые вопросы</h1>
            <ul>{questions.map((item, index) => <QuestionItem key={index} question={item} {...item} />)}</ul>
        </section>
    );
};

export default Questions;
