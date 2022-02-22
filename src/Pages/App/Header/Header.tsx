import appRoutes from '../../../routes/appRoutes';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';

const Header = () => {
  const renderLinks = () => {
    return appRoutes.map((route) => (
      <NavLink className={styles.link} key={route.id} to={route.path}>
        {route.name}
      </NavLink>
    ));
  };

  return <div className={styles.header}>{renderLinks()}</div>;
};

export default Header;
