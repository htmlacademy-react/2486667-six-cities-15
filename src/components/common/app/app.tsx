import {Route, Routes} from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';

type AppProps = {
  cards: string[];
}

export default function App({ cards }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage cards={cards}/>}
      />
    </Routes>
  );
}
