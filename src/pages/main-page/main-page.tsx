import Header from '../../components/common/header/header';
import Container from '../../components/common/container/container';
import {Offer} from '../../types/offer';
import OfferList from '../../components/catalog/offer-list/offer-list';
import MainContainer from '../../components/common/main-container/main-container';
import {useState} from 'react';
import Tabs from '../../components/common/tabs/tabs';
import {getCitiesWithPath} from '../../utils/utils';

type MainPageProps = {
  offers: Offer[];
}

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<Offer['id']>('');

  const handleMouseOver = (id: string) => {
    setActiveCardId(id);
  };

  return (
    <Container extraClass="page--gray page--main">
      <Header />
      <MainContainer extraClass="page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs citiesWithPath={getCitiesWithPath(offers)} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              activeCardId = {activeCardId} {/*Temporary for lint*/}

              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offers} block='cities' handleMouseOver={handleMouseOver} />
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </MainContainer>
    </Container>
  );
}
