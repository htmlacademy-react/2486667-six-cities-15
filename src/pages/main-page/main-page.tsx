import Header from '../../components/common/header/header';
import Container from '../../components/common/container/container';
import {Offer} from '../../types/offer';
import OfferList from '../../components/catalog/offer-list/offer-list';
import MainContainer from '../../components/common/main-container/main-container';
import {useEffect, useState} from 'react';
import Tabs from '../../components/common/tabs/tabs';
import {City} from '../../types/city';
import {DEFAULT_CITY} from '../../utils/const';
import OfferListEmpty from '../../components/catalog/offer-list-empty/offer-list-empty';
import {useLocation} from 'react-router-dom';
import {capitalizeU} from '../../utils/common';

type MainPageProps = {
  offers: Offer[];
  cities: City[];
}

export default function MainPage({ offers, cities }: MainPageProps): JSX.Element {
  const {pathname} = useLocation();
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const currentOffers: Offer[] = currentCity && offers.filter((offer) => offer.city.name === currentCity.name);

  useEffect(() => {
    const name = capitalizeU(pathname === '/' ? 'amsterdam' : pathname.slice(1));
    const city = cities.find((item) => item.name === name) as City;

    setCurrentCity(city);
  }, [pathname, cities]); // cities added for lint

  return (
    <Container extraClass="page--gray page--main">
      <Header />
      <MainContainer extraClass="page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs cities={cities} />

        <div className="cities">
          {currentOffers && currentOffers.length ?
            <OfferList offers={currentOffers} block='cities' /> :
            <OfferListEmpty currentCity={currentCity} />}
        </div>
      </MainContainer>
    </Container>
  );
}
