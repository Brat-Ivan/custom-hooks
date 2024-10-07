import { useState } from 'react';
import { useDebounce } from '../shared/hooks/useDebounce';

type Props = {
  theme: string,
};

export const UseDebouncePage = ({ theme }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const term = useDebounce(inputValue, 300);

  return (
    <>
      <h1 data-theme={theme} className="main__title">useDebounce</h1>
      <div className="main__container">
          <p data-theme={theme} className="main__name">
            Current name: {term}
          </p>
          <input
            type="text"
            placeholder="Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            data-theme={theme}
            className="main__input"
          />
      </div>
    </>
  );
};
