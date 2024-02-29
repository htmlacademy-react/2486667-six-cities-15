import Container from '../../components/common/container/container';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import {Offer} from '../../types/offer';
import MainContainer from '../../components/common/main-container/main-container';
import {getFavoritesByLocation} from '../../utils/common';
import FavoritesList from '../../components/catalog/favorites-list/favorites-list';
import FavoritesListEmpty from '../../components/catalog/favorites-list-empty/favorites-list-empty';
import {City} from '../../types/city';

type FavoritesPagePops = {
  offers: Offer[];
  cities: City[];
}

export default function FavoritesPage({ offers, cities }: FavoritesPagePops): JSX.Element {
  const favorites = getFavoritesByLocation(offers);

  return (
    <Container>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <MainContainer extraClass="page__main--favorites">
        <div className="page__favorites-container container">
          {Object.keys(favorites).length ?
            <FavoritesList favorites={favorites} cities={cities} /> :
            <FavoritesListEmpty />}
        </div>
      </MainContainer>
      <Footer extraClass="container" />
    </Container>
  );
}
