import style from './KeyBenefits.module.css';

const BenefitItem = ({ benefit }) => {
    return (
        <li className={style['wrapper-item']}>
            <div className={style['benefit-item']}>
                <div className={style['benefit-icon-block']}>
                    <div className={style['benefit-icon']}></div>
                </div>
                <div className={style['benefit-text']}>
                    <h3>{benefit.h3}</h3>
                    <p>{benefit.p}</p>
                </div>
            </div>
        </li>
    );
};

export default BenefitItem;
