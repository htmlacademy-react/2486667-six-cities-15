import {Helmet} from 'react-helmet-async';
import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import {getFavoritesByLocation} from '@/utils';
import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import Footer from '@/components/common/footer/footer';
import MainContainer from '@/components/common/main-container/main-container';
import FavoritesList from '@/components/catalog/favorites-list/favorites-list';
import FavoritesListEmpty from '@/components/catalog/favorites-list-empty/favorites-list-empty';
import {useAppSelector} from '@/hooks/store/store';
import {offersSelectors} from '@/store/slices/offers';

type FavoritesPagePops = {
  cities: City[];
}

export default function FavoritesPage({ cities }: FavoritesPagePops): JSX.Element {
  const offers: Offer[] = useAppSelector(offersSelectors.offers);
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
