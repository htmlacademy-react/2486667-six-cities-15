import {Route, Routes} from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import LoginPage from '../../../pages/login-page/login-page';
import FavoritesPage from '../../../pages/favorites-page/favorites-page';
import OfferPage from '../../../pages/offer-page/offer-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';

type AppProps = {
  cards: string[];
}

export default function App({ cards }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage cards={cards} />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/favorites"
        element={<FavoritesPage />}
      />
      <Route
        path="/offer/:id"
        element={<OfferPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
