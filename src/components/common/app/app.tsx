import MainPage from '../../../pages/main-page/main-page';
import Header from '../header/header';
import ExtraContainer from '../extra-container/extra-container';

type AppProps = {
  cards: string[];
}

export default function App({ cards }: AppProps): JSX.Element {
  return (
    <ExtraContainer extraClass="page--gray page--main">
      <Header />
      <MainPage cards={cards}/>
    </ExtraContainer>
  );
}
