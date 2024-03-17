import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {setAuthStatus} from '@/utils/common';
import {AuthStatus} from '@/utils/const';
import {Offer} from '@/types/offer';
import Container from '@/components/common/container/container';
import Header from '@/components/common/header/header';
import MainContainer from '@/components/common/main-container/main-container';
import OfferGallary from '@/components/catalog/offer-gallary/offer-gallary';
import OfferDescription from '@/components/catalog/offer-description/offer-description';
import OfferReviews from '@/components/catalog/offer-reviews/offer-reviews';
import OfferOtherPlaces from '@/components/catalog/offer-other-places/offer-other-places';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import {Review} from '@/types/reviews';
import {useState} from 'react';
import {Location} from '@/types/location';
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';
import {useAppSelector} from "@/hooks/store/store";

type OfferPageProps = {
  reviews: Review[];
}

export default function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const isAuthenticate = setAuthStatus(AuthStatus.Auth);
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offersData);
  const offer: Offer | undefined = offers.find((item) => item.id === id);
  const [activePoint, setActivePoint] = useState<Location | null>(offer!.location);

  const hoverHandler = (hoverId: Offer['id'] | null) => {
    const point = offers.find((item) => item.id === hoverId)?.location || null;
    setActivePoint(point);
  };

  const MAX_NEAR_OFFERS = 3;
  const nearOffers: Offer[] = offers.slice(0, MAX_NEAR_OFFERS); // Временно берем три первых предложения из моков

  const nearOffersPlusCurrent: Offer[] = [...nearOffers, offer!];
  const points = nearOffersPlusCurrent.map((item) => item.location);

  if (!offer) {
    return <NotFoundPage type='offer' />;
  }

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

                <OfferReviews isAuth={isAuthenticate} reviews={reviews} />
              </div>
            </div>

            <MapLeaflet
              currentCity={offer.city}
              points={points}
              activePoint={activePoint}
              extraClass="offer__map"
            />
          </section>}

        <OfferOtherPlaces offers={nearOffers} hoverHandler={hoverHandler} />
      </MainContainer>
    </Container>
  );
}
