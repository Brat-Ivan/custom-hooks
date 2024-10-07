import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const { value: theme, updateValue: setTheme } = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
