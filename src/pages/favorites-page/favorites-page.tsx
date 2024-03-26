import {Helmet} from 'react-helmet-async';
import {City} from '@/types/city';
import {getFavoritesByLocation} from '@/utils';
import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import Footer from '@/components/common/footer/footer';
import MainContainer from '@/components/common/main-container/main-container';
import FavoritesList from '@/components/catalog/favorites-list/favorites-list';
import FavoritesListEmpty from '@/components/catalog/favorites-list-empty/favorites-list-empty';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {useEffect} from 'react';
import {favoritesActions, favoritesSelectors} from '@/store/slices/favorites';

type FavoritesPagePops = {
  cities: City[];
}

export default function FavoritesPage({ cities }: FavoritesPagePops): JSX.Element {
  const { fetchFavorites } = useActionCreators(favoritesActions);
  const favorites = useAppSelector(favoritesSelectors.favorites);
  //console.log(favorites) //TODO
  const favoritesByLocation = getFavoritesByLocation(favorites);

  useEffect(()=> {
    fetchFavorites();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <MainContainer extraClass="page__main--favorites">
        <div className="page__favorites-container container">
          {Object.keys(favoritesByLocation).length ?
            <FavoritesList favorites={favoritesByLocation} cities={cities} /> :
            <FavoritesListEmpty />}
        </div>
      </MainContainer>
      <Footer extraClass="container" />
    </Container>
  );
}
