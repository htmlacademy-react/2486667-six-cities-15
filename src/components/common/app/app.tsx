import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '@/utils/const';
import {City} from '@/types/city';
import MainPage from '@/pages/main-page/main-page';
import LoginPage from '@/pages/login-page/login-page';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';
import ProtectedRoute from '@/components/common/protected-route/protected-route';
import {Review} from '@/types/reviews';
import {CITIES} from '@/mocks/cities';
import {useAppSelector} from '@/hooks/store/store';
import LoadingScreen from '@/pages/loading-screen/loading-screen';

type AppProps = {
  cities: City[];
  reviews: Review[];
}

export default function App({ cities, reviews }: AppProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authStatus === AuthStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage cities={cities} />}
      >
        {CITIES.map((city) =>
          <Route key={city.id} element={<MainPage cities={cities}/>} path={city.id}/>
        )}
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
