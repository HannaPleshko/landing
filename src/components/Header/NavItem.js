import { Link } from 'react-router-dom';
import style_ from './Header.module.css';

const NavItem = ({ title }) => {
  return (
    <li>
      <Link to={'*'} className={style_['item']}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
