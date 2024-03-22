import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import MainContainer from '@/components/common/main-container/main-container';
import OfferList from '@/components/catalog/offer-list/offer-list';
import OfferListEmpty from '@/components/catalog/offer-list-empty/offer-list-empty';
import Tabs from '@/components/common/tabs/tabs';
import {capitalizeU} from '@/utils/common';
import {City} from '@/types/city';
import {useAppDispatch, useAppSelector} from '@/hooks/store/store';
import {changeCity, sortOffers} from '@/store/actions';
import {DEFAULT_CITY} from '@/utils/const';
import {getCurrentOffers} from '@/pages/main-page/utils';

type MainPageProps = {
  cities: City[];
}

export default function MainPage({ cities }: MainPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offersData);
  const currentOffers = getCurrentOffers(currentCity, offers);

  useEffect(() => {
    const name = capitalizeU(pathname === '/' ? DEFAULT_CITY.name : pathname.slice(1));
    const city = cities.find((item) => item.name === name) as City;

    dispatch(changeCity(city));
    dispatch(sortOffers());
  }, [pathname, cities, dispatch]);

  return (
    <Container extraClass="page--gray page--main">
      <Header />
      <MainContainer extraClass="page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs cities={cities} />

        <div className="cities">
          {currentOffers.length !== 0 && currentCity &&
            <OfferList offers={currentOffers} currentCity={currentCity} block='cities' />}
          {currentOffers.length === 0 && currentCity &&
            <OfferListEmpty currentCity={currentCity} />}
        </div>
      </MainContainer>
    </Container>
  );
}
