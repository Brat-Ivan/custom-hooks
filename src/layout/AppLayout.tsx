import { Outlet, Link, useLocation } from 'react-router-dom';
import { ROUTES } from './../shared/constants/routes';

export const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <nav className="menu">
        <Link
          to={ROUTES.home}
          className={`menu__link ${location.pathname === ROUTES.home ? 'menu__link--active' : ''}`}
        >
          Home
        </Link>
        <span> | </span>
        <Link
          to={ROUTES.useLocalStorage}
          className={`menu__link ${location.pathname.includes(ROUTES.useLocalStorage) ? 'menu__link--active' : ''}`}
        >
          useLocalStorage
        </Link>
        <span> | </span>
        <Link
          to={ROUTES.useDebounce}
          className={`menu__link ${location.pathname.includes(ROUTES.useDebounce) ? 'menu__link--active' : ''}`}
        >
          useDebounce
        </Link>
        <span> | </span>
        <Link
          to={ROUTES.useTheme}
          className={`menu__link ${location.pathname.includes(ROUTES.useTheme) ? 'menu__link--active' : ''}`}
        >
          useTheme
        </Link>
        <span> | </span>
        <Link
          to={ROUTES.useInput}
          className={`menu__link ${location.pathname.includes(ROUTES.useInput) ? 'menu__link--active' : ''}`}
        >
          useInput
        </Link>
        <span> | </span>
        <Link
          to={ROUTES.useFetchMore}
          className={`menu__link ${location.pathname.includes(ROUTES.useFetchMore) ? 'menu__link--active' : ''}`}
        >
          useFetchMore
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
