import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import NavItem from './NavItem';

const Header = () => {
  let titles = [
    'Программа обучения',
    'Отзывы',
    'Вопросы',
    'Стоимость',
  ];

  return (
    <header>
      <div className={style['container']}>
        <div className={style['logo']}> <Link to={'/'}>HSchool</Link></div>
        <ul>{titles.map((item, index) => <NavItem key={index} title={item} {...item} />)}</ul>
        <Link to={'*'}>
          <div className={style['btn']}>
            Записаться
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
