import {Route, Routes} from 'react-router-dom';
import {AppRoute, DEFAULT_CITY} from '@/utils/const';
import {City} from '@/types/city';
import MainPage from '@/pages/main-page/main-page';
import LoginPage from '@/pages/login-page/login-page';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';
import ProtectedRoute from '@/components/common/protected-route/protected-route';
import {Review} from '@/types/reviews';
import {useAppDispatch} from '@/hooks/store/store';
import {useEffect} from 'react';
import {changeCity, fillingOffers} from '@/store/actions';

type AppProps = {
  cities: City[];
  reviews: Review[];
}

export default function App({ cities, reviews }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillingOffers());
    dispatch(changeCity(DEFAULT_CITY));
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage cities={cities} />}
      >
        <Route
          path={AppRoute.RootParis}
          element={<MainPage cities={cities} />}
        />
        <Route
          path={AppRoute.RootAmsterdam}
          element={<MainPage cities={cities} />}
        />
        <Route
          path={AppRoute.RootCologne}
          element={<MainPage cities={cities} />}
        />
        <Route
          path={AppRoute.RootBrussels}
          element={<MainPage cities={cities} />}
        />
        <Route
          path={AppRoute.RootHamburg}
          element={<MainPage cities={cities} />}
        />
        <Route
          path={AppRoute.RootDusseldorf}
          element={<MainPage cities={cities} />}
        />
      </Route>
      <Route
        path={AppRoute.Login}
        element={<ProtectedRoute onlyUnAuth><LoginPage /></ProtectedRoute>}
      />
      <Route
        path={AppRoute.Favorites}
        element={<ProtectedRoute><FavoritesPage cities={cities} /></ProtectedRoute>}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferPage reviews={reviews} />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage type='page' />}
      />
    </Routes>
  );
}
