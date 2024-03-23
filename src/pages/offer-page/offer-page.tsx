import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {Offer} from '@/types/offer';
import Container from '@/components/common/container/container';
import Header from '@/components/common/header/header';
import MainContainer from '@/components/common/main-container/main-container';
import OfferGallary from '@/components/catalog/offer-gallary/offer-gallary';
import OfferReviews from '@/components/catalog/offer-reviews/offer-reviews';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import {Review} from '@/types/reviews';
import {Location} from '@/types/location';
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';
import {useAppDispatch, useAppSelector} from '@/hooks/store/store';
import {getNearOffers} from '@/pages/offer-page/utils';
import {City} from '@/types/city';
import {useEffect, useState} from 'react';
import {fetchOfferAction} from '@/store/api-actions';
import OfferDescription from '@/components/catalog/offer-description/offer-description';
import OfferOtherPlaces from '@/components/catalog/offer-other-places/offer-other-places';

type OfferPageProps = {
  reviews: Review[];
}

export default function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const offers: Offer[] = useAppSelector((state) => state.offersData);
  const offer: Offer | null = useAppSelector((state) => state.offerData);
  const [activePoint, setActivePoint] = useState<Location | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (offer?.location) {
      setActivePoint(offer.location);
    }
  }, [offer]);

  if (!offer) {
    return <NotFoundPage type='offer' />;
  }

  const currentCity: City = offer.city;

  const hoverHandler = (hoverId: Offer['id'] | null) => {
    const point = offers.find((item) => item.id === hoverId)?.location || null;
    setActivePoint(point);
  };

  const nearOffers = getNearOffers(currentCity, offers);
  const nearOffersPlusCurrent: Offer[] = [...nearOffers, offer];
  const nearPoints = nearOffersPlusCurrent.map((item) => item.location);

  return (
    <Container>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <MainContainer extraClass="page__main--offer">
        {offer &&
          <section className="offer">
            <OfferGallary images={offer.images} />

            <div className="offer__container container">
              <div className="offer__wrapper">
                <OfferDescription offer={offer} />

                <OfferReviews reviews={reviews} />
              </div>
            </div>

            <MapLeaflet
              currentCity={currentCity}
              points={nearPoints}
              activePoint={activePoint}
              extraClass="offer__map"
            />
          </section>}

        <OfferOtherPlaces offers={nearOffers} hoverHandler={hoverHandler} />
      </MainContainer>
    </Container>
  );
}
