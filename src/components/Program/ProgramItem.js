import React, { useState } from 'react';
import style from './Program.module.css';

const ProgramItem = ({ module }) => {
    const [activeItem, setActiveItem] = useState(false);

    function createMarkup() {
        return {
           __html: module.p    };
     }; 

    return (
        <li onClick={() => setActiveItem(!activeItem)}>
            <div className={style['block-program']}>
                <h3 >{module.h3}</h3>
                {activeItem ? <p dangerouslySetInnerHTML={createMarkup()} /> : null}
            </div>
            <div>
                {activeItem ? <div className={style['arrow-on']}></div> : <div className={style['arrow-off']}></div>}
            </div>
        </li>
    );
};

export default ProgramItem;
