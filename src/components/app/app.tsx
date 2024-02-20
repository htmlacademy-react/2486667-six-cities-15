import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cards: string[];
}

export default function App({ cards }: AppProps): JSX.Element {
  return (
    <MainPage cards={cards}/>
  );
}
