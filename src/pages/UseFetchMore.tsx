import { useFetchMore } from '../shared/hooks/useFetchMore';
import { Loader } from '../shared/ui/Loader/index';

type Props = {
  theme: string,
}

type Product = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const apiUrl = 'https://fakestoreapi.com/products';
const params = { limit: 5, total: 20 };

export const UseFetchMore = ({ theme }: Props) => {
  const { data, error, isLoading, isOver, fetchMore } = useFetchMore(apiUrl, params);

  return (
    <>
      <h1 data-theme={theme} className="main__title">useFetchMore</h1>
      <div className="main__container">
        <ul className="main__card-list">
          {!error && data.map((item: Product) => (
            <li className="main__card-item">
              <article key={item.id} data-theme={theme} className="card">
                <h2 className="card__title">{item.title}</h2>
                <span className="card__category">Category: {item.category}</span>
                <p className="card__description">{item.description.slice(0, 120)}...</p>
                <div className="card__bottom">
                  <span className="card__price">Price: ${item.price}</span>
                  <a href="#!" data-theme={theme} className="card__link main__button">View more</a>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {error && <p className="main__loading-error">Loading Error</p>}
        {isLoading && <div className="main__loader-wrapper"><Loader /></div>}
        {(!error && !isLoading && !isOver) &&
          <button data-theme={theme} onClick={fetchMore} className="main__button">Load more</button>
        }
      </div>
    </>
  );
};
