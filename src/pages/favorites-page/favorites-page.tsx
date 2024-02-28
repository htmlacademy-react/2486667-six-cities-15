import Container from '../../components/common/container/container';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import MainContainer from '../../components/common/main-container/main-container';
import OfferList from '../../components/catalog/offer-list/offer-list';
import {getFavoritesByLocation} from '../../utils/utils';

type FavoritesPagePops = {
  offers: Offer[];
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
                    {favorites[location] &&
                      <OfferList offers={favorites[location]} block='favorites' />}
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
