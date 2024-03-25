import {Helmet} from 'react-helmet-async';
import {City} from '@/types/city';
import {getFavoritesByLocation} from '@/utils';
import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import Footer from '@/components/common/footer/footer';
import MainContainer from '@/components/common/main-container/main-container';
import FavoritesList from '@/components/catalog/favorites-list/favorites-list';
import FavoritesListEmpty from '@/components/catalog/favorites-list-empty/favorites-list-empty';
import {useAppDispatch, useAppSelector} from '@/hooks/store/store';
import {offersSelectors} from '@/store/slices/offers';
import {useEffect} from 'react';
import {fetchFavorites} from '@/store/thunks/offers';

type FavoritesPagePops = {
  cities: City[];
}

export default function FavoritesPage({ cities }: FavoritesPagePops): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = getFavoritesByLocation(useAppSelector(offersSelectors.favorites));

  useEffect(()=> {
    dispatch(fetchFavorites());
  }, [dispatch]);

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
