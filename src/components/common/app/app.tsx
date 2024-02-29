import {Route, Routes} from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import LoginPage from '../../../pages/login-page/login-page';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import {AppRoute, AuthStatus} from '../../../const';
import OfferPage from '../../../pages/offer-page/offer-page';
import {Offer} from '../../../types/offer';
import ProtectedRoute from '../protected-route/protected-route';
import {City, CityPath} from '../../../types/city';

type AppProps = {
  offers: Offer[];
  cities: City[];
  citiesWithPath: CityPath[];
}

export default function App({ offers, cities, citiesWithPath }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage offers={offers} cities={cities} citiesWithPath={citiesWithPath} />}
      >
        <Route
          path={AppRoute.RootParis}
          element={<MainPage offers={offers} cities={cities} citiesWithPath={citiesWithPath} />}
        />
        <Route
          path={AppRoute.RootCologne}
          element={<MainPage offers={offers} cities={cities} citiesWithPath={citiesWithPath} />}
        />
        <Route
          path={AppRoute.RootBrussels}
          element={<MainPage offers={offers} cities={cities} citiesWithPath={citiesWithPath} />}
        />
        <Route
          path={AppRoute.RootHamburg}
          element={<MainPage offers={offers} cities={cities} citiesWithPath={citiesWithPath} />}
        />
        <Route
          path={AppRoute.RootDusseldorf}
          element={<MainPage offers={offers} cities={cities} citiesWithPath={citiesWithPath} />}
        />
      </Route>
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
