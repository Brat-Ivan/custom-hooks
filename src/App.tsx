import { Routes, Route } from 'react-router-dom';
import { useTheme } from './shared/hooks/useTheme';
import { ROUTES } from './shared/constants/routes';
import { AppLayout } from './layout/AppLayout';
import { HomePage } from './pages/Home'
import { LocalStoragePage } from './pages/LocalStoragePage'
import { DebouncePage } from './pages/DebouncePage'
import { ThemePage } from './pages/ThemePage'
import { InputPage } from './pages/InputPage'
import { FetchMorePage } from './pages/FetchMorePage'
import { ErrorPage } from './pages/Error'
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App" data-theme={theme}>
      <header className="hearder">
        <p data-theme={theme} className="hearder__title">Custom Hooks</p>
      </header>
      <main className="main">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.useLocalStorage} element={<LocalStoragePage theme={theme} />} />
            <Route path={ROUTES.useDebounce} element={<DebouncePage theme={theme} />} />
            <Route path={ROUTES.useTheme} element={<ThemePage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path={ROUTES.useInput} element={<InputPage theme={theme} />} />
            <Route path={ROUTES.useFetchMore} element={<FetchMorePage theme={theme} />} />
            <Route path={ROUTES.error} element={<ErrorPage theme={theme} />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
