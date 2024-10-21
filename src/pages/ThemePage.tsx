type Props = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

export const ThemePage = ({ theme, toggleTheme }: Props) => {
  return (
    <>
      <h1 data-theme={theme} className="main__title">useTheme</h1>
      <div className="main__container">
        <button
          type="button"
          onClick={() => toggleTheme(theme)}
          data-theme={theme}
          className="main__theme-button main__button"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </>
  );
};
