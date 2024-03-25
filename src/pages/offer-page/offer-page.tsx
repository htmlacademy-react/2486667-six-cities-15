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
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {City} from '@/types/city';
import {useEffect} from 'react';
import OfferDescription from '@/components/catalog/offer-description/offer-description';
import OfferOtherPlaces from '@/components/catalog/offer-other-places/offer-other-places';
import {RequestStatus} from '@/utils/const';
import LoadingScreen from '@/pages/loading-screen/loading-screen';
import {offerActions, offerSelectors} from '@/store/slices/offer';
import {nearbyActions, nearbySelectors} from '@/store/slices/nearby';

type OfferPageProps = {
  reviews: Review[];
}

export default function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const { fetchOffer } = useActionCreators(offerActions);
  const { fetchNearOffers } = useActionCreators(nearbyActions);
  const { id } = useParams();

  const offer: Offer | null = useAppSelector(offerSelectors.offer);
  const status = useAppSelector(offerSelectors.status);
  const nearOffers = useAppSelector(nearbySelectors.nearOffers).slice(0, 3);

  useEffect(() => {
    if (id) {
      fetchOffer(id);
      fetchNearOffers(id);
    }
  }, [id, fetchOffer, fetchNearOffers]);

  if (status === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  if (!offer || status === RequestStatus.Failed) {
    return <NotFoundPage type='offer' />;
  }

  const currentCity: City = offer.city;
  const activePoint = offer.location;

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

        <OfferOtherPlaces offers={nearOffers} />
      </MainContainer>
    </Container>
  );
}
