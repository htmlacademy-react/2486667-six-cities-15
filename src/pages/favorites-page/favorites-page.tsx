import Container from '../../components/common/container/container';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';
import MainContainer from '../../components/common/main-container/main-container';

type FavoritesPagePops = {
  offers: Offer[];
}

function getFavoritesByLocation(offers: Offer[]): {[key: string]: Offer[]} {
  return offers.reduce<{[key: string]: Offer[]}>((acc, current) => {
    const location = current.city.name;

    if (current.isFavorite) {
      if (!(location in acc)) {
        acc[location] = [];
      }
      acc[location].push(current);
    }

    return acc;
  }, {});
}

export default function FavoritesPage({ offers }: FavoritesPagePops): JSX.Element {
  const favorites = getFavoritesByLocation(offers);

  return (
    <Container>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <MainContainer extraClass="page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {favorites && Object.keys(favorites).map((location) => (
                <li key={location} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>{location}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">

                    {favorites[location] && favorites[location].map((item) => (
                      <article key={item.id} className="favorites__card place-card">
                        {item.isPremium &&
                          <div className="place-card__mark">
                            <span>Premium</span>
                          </div>}
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={`${AppRoute.Offer }/${ item.id}`}>
                            <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place image" />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{item.price}</b>
                              <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: `${((item.rating / 5) * 100).toFixed(1) }%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={`${AppRoute.Offer }/${ item.id}`}>
                              {item.title}
                            </Link>
                          </h2>
                          <p className="place-card__type">{item.type}</p>
                        </div>
                      </article>
                    ))}

                  </div>
                </li>
              ))}

            </ul>
          </section>
        </div>
      </MainContainer>
      <Footer extraClass="container" />
    </Container>
  );
}
