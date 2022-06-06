import React, { useState } from 'react';
import style from './Questions.module.css';

const QuestionItem = ({ question }) => {
    const [activeQuestion, setActiveQuestion] = useState(false);

    return (
        <li onClick={() => setActiveQuestion(!activeQuestion)}>
            <div className={style['block-question']}>
                <h3 >{question.h3}</h3>
                {activeQuestion ? <p>{question.p}</p> : null}
            </div>
            <div>
                {activeQuestion ? <div className={style['arrow-on']}></div> : <div className={style['arrow-off']}></div>}
            </div>
        </li>
    );
};

export default QuestionItem;
