import { Outlet, Link, useLocation } from 'react-router-dom';

export const AppLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isUseLocalStoragePage = location.pathname === '/useLocalStorage';
  const isUseDebouncePage = location.pathname === '/useDebounce';
  const isUseThemePage = location.pathname === '/useTheme';
  const isuUseInputPage = location.pathname === '/useInput';
  const isUseFetchMorePage = location.pathname === '/useFetchMore';

  const applyActiveStyle = (condition: boolean) => {
    if (condition) {
      return { color: 'var(--color-accent)' };
    }
  };

  return (
    <>
      <nav className="menu">
        <Link to="/" style={applyActiveStyle(isHomePage)} className="menu__link">Home</Link>
        <span> | </span>
        <Link to="/useLocalStorage" style={applyActiveStyle(isUseLocalStoragePage)} className="menu__link">useLocalStorage</Link>
        <span> | </span>
        <Link to="/useDebounce" style={applyActiveStyle(isUseDebouncePage)} className="menu__link">useDebounce</Link>
        <span> | </span>
        <Link to="/useTheme" style={applyActiveStyle(isUseThemePage)} className="menu__link">useTheme</Link>
        <span> | </span>
        <Link to="/useInput" style={applyActiveStyle(isuUseInputPage)} className="menu__link">useInput</Link>
        <span> | </span>
        <Link to="/useFetchMore" style={applyActiveStyle(isUseFetchMorePage)} className="menu__link">useFetchMore</Link>
      </nav>
      <Outlet />
    </>
  );
}
