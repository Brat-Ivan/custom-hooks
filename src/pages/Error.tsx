import { Link } from 'react-router-dom';

type Props = {
  theme: string,
};

export const ErrorPage = ({ theme }: Props) => {
  return (
    <>
      <h1 data-theme={theme} className="main__title">404 - Not found</h1>
      <div className="main__container">
        <Link to="/" data-theme={theme} className="main__button">Return to the home page</Link>
      </div>
    </>
  );
};
