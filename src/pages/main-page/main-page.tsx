import Header from '../../components/common/header/header';
import Container from '../../components/common/container/container';
import {Offer} from '../../types/offer';
import OfferList from '../../components/catalog/offer-list/offer-list';
import MainContainer from '../../components/common/main-container/main-container';
import {useEffect, useState} from 'react';
import Tabs from '../../components/common/tabs/tabs';
import {City, CityPath} from '../../types/city';
import {DEFAULT_CITY} from '../../const';
import OfferListEmpty from '../../components/catalog/offer-list-empty/offer-list-empty';
import {useLocation} from 'react-router-dom';
import {capitalizeU} from '../../utils/utils';

type MainPageProps = {
  offers: Offer[];
  cities: City[];
  citiesWithPath: CityPath[];
}

export default function MainPage({ offers, cities, citiesWithPath }: MainPageProps): JSX.Element {
  const {pathname} = useLocation();
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const [activeCardId, setActiveCardId] = useState<Offer['id']>('');
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);

  useEffect(() => {
    const name = capitalizeU(pathname === '/' ? 'amsterdam' : pathname.slice(1));
    const city = cities.find((item) => item.name === name);

    setCurrentCity(city);
  }, [pathname, cities]); // cities added for lint

  const handleMouseOver = (id: string) => {
    setActiveCardId(id);
  };

  return (
    <Container extraClass="page--gray page--main">
      <Header />
      <MainContainer extraClass="page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs citiesWithPath={citiesWithPath} />

        activeCardId = {activeCardId} {/*Temporary for lint*/}

        <div className="cities">
          {currentOffers.length
            ? <OfferList offers={currentOffers} block='cities' handleMouseOver={handleMouseOver} />
            : <OfferListEmpty/>}
        </div>
      </MainContainer>
    </Container>
  );
}
