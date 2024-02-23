import Container from '../../components/common/container/container';
import ExtraContainer from '../../components/common/extra-container/extra-container';
import Header from '../../components/common/header/header';
import Tabs from '../../components/common/tabs/tabs';

export default function MainEmptyPage(): JSX.Element {
  return (
    <ExtraContainer extraClass="page--gray page--main">
      <Header />
      <Container extraClass="page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>

            <div className="cities__right-section"></div>
          </div>
        </div>
      </Container>
    </ExtraContainer>
  );
}
