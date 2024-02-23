import Container from '../../components/common/container/container';
import ExtraContainer from '../../components/common/extra-container/extra-container';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import {Helmet} from 'react-helmet-async';

export default function FavoritesEmptyPage(): JSX.Element {
  return (
    <ExtraContainer extraClass="page--favorites-empty">
      <Helmet>
        <title>6 cities: favorites empty</title>
      </Helmet>
      <Header />
      <Container extraClass="page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </ExtraContainer>
  );
}
