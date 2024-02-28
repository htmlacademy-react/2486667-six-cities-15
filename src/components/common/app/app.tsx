import {Route, Routes} from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import LoginPage from '../../../pages/login-page/login-page';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import {AppRoute, AuthStatus} from '../../../const';
import OfferPage from '../../../pages/offer-page/offer-page';
import {Offer} from '../../../types/offer';
import ProtectedRoute from '../protected-route/protected-route';

type AppProps = {
  offers: Offer[];
}

export default function App({ offers }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage offers={offers} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={<ProtectedRoute authStatus={AuthStatus.Auth}><FavoritesPage offers={offers} /></ProtectedRoute>}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferPage offers={offers} />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
