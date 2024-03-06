import {Route, Routes} from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import LoginPage from '../../../pages/login-page/login-page';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import {AppRoute} from '../../../utils/const';
import OfferPage from '../../../pages/offer-page/offer-page';
import {Offer} from '../../../types/offer';
import ProtectedRoute from '../protected-route/protected-route';
import {City} from '../../../types/city';

type AppProps = {
  offers: Offer[];
  cities: City[];
}

export default function App({ offers, cities }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage offers={offers} cities={cities} />}
      >
        <Route
          path={AppRoute.RootParis}
          element={<MainPage offers={offers} cities={cities} />}
        />
        <Route
          path={AppRoute.RootCologne}
          element={<MainPage offers={offers} cities={cities} />}
        />
        <Route
          path={AppRoute.RootBrussels}
          element={<MainPage offers={offers} cities={cities} />}
        />
        <Route
          path={AppRoute.RootHamburg}
          element={<MainPage offers={offers} cities={cities} />}
        />
        <Route
          path={AppRoute.RootDusseldorf}
          element={<MainPage offers={offers} cities={cities} />}
        />
      </Route>
      <Route
        path={AppRoute.Login}
        element={<ProtectedRoute onlyUnAuth><LoginPage /></ProtectedRoute>}
      />
      <Route
        path={AppRoute.Favorites}
        element={<ProtectedRoute><FavoritesPage offers={offers} cities={cities} /></ProtectedRoute>}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferPage offers={offers} />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage type='page' />}
      />
    </Routes>
  );
}
