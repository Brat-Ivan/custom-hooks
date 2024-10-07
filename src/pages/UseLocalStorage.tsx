import { useState } from 'react';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';

type Props = {
  theme: string,
}

export const UseLocalStoragePage = ({ theme }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const { value: name, updateValue: setName, removeValue: removeName } = useLocalStorage('name', inputValue);

  return (
    <>
      <h1 data-theme={theme} className="main__title">useLocalStorage</h1>
      <div className="main__container">
        <p data-theme={theme} className="main__name">
          Stored name: {name}
        </p>
        <input
          type="text"
          placeholder="Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          data-theme={theme}
          className="main__input"
        />
        <div className="main__button-wrapper">
          <button
            type="button"
            onClick={() => setName(inputValue)}
            data-theme={theme}
            className="main__button"
          >
            Update name
          </button>
          <button
            type="button"
            onClick={removeName}
            data-theme={theme}
            className="main__button"
          >
            Remove name
          </button>
        </div>
      </div>
    </>
  );
};
