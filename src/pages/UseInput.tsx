import { useInput } from '../shared/hooks/useInput';

type Props = {
  theme: string,
};

export const UseInputPage = ({ theme }: Props) => {
  const username = useInput('', { minLengthValue: 4, maxLengthValue: 20 });

  return (
    <>
      <h1 data-theme={theme} className="main__title">useInput</h1>
      <div className="main__container">
        <input
          type="text"
          value={username.value}
          placeholder="Enter your username"
          onChange={username.onChange}
          onBlur={() => username.onBlurValidation()}
          data-theme={theme}
          className="main__input"
        />
        <div className="main__input-error">{username.error}</div>
        <div className="main__button-wrapper">
          <button
            type="button"
            onClick={username.clear}
            data-theme={theme}
            className="main__button"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
