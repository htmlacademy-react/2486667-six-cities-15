import {Route, Routes} from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import LoginPage from '../../../pages/login-page/login-page';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import ProtectedRoute from '../protected-route/protected-route';
import {AppRoute, AuthStatus} from '../../../const';
import OfferPage from '../../../pages/offer-page/offer-page';

type AppProps = {
  cards: string[];
}

export default function App({ cards }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage cards={cards} />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={<ProtectedRoute authStatus={AuthStatus.NoAuth}><FavoritesPage /></ProtectedRoute>}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferPage />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
