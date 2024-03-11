import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import MainPage from '@/pages/main-page/main-page';
import LoginPage from '@/pages/login-page/login-page';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';
import ProtectedRoute from '@/components/common/protected-route/protected-route';
import {Review} from '@/types/reviews';

type AppProps = {
  offers: Offer[];
  cities: City[];
  reviews: Review[];
}

export default function App({ offers, cities, reviews }: AppProps): JSX.Element {
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
        element={<OfferPage offers={offers} reviews={reviews} />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage type='page' />}
      />
    </Routes>
  );
}
