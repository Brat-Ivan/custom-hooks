import { Routes, Route } from 'react-router-dom';
import { useTheme } from './shared/hooks/useTheme';
import { AppLayout } from './AppLayout';
import { HomePage } from './pages/Home'
import { UseLocalStoragePage } from './pages/UseLocalStorage'
import { UseDebouncePage } from './pages/UseDebounce'
import { UseThemePage } from './pages/UseTheme'
import { UseInputPage } from './pages/UseInput'
import { UseFetchMore } from './pages/UseFetchMore'
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
            <Route path="/" element={<HomePage />} />
            <Route path="/useLocalStorage" element={<UseLocalStoragePage theme={theme} />} />
            <Route path="/useDebounce" element={<UseDebouncePage theme={theme} />} />
            <Route path="/useTheme" element={<UseThemePage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/useInput" element={<UseInputPage theme={theme} />} />
            <Route path="/useFetchMore" element={<UseFetchMore theme={theme} />} />
            <Route path="*" element={<ErrorPage theme={theme} />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
