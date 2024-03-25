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
import {useAppDispatch, useAppSelector} from '@/hooks/store/store';
import {City} from '@/types/city';
import {useEffect} from 'react';
import OfferDescription from '@/components/catalog/offer-description/offer-description';
import OfferOtherPlaces from '@/components/catalog/offer-other-places/offer-other-places';
import {offersSelectors} from '@/store/slices/offers';
import {fetchNearOffers, fetchOffer} from '@/store/thunks/offers';
import {RequestStatus} from '@/utils/const';
import LoadingScreen from '@/pages/loading-screen/loading-screen';

type OfferPageProps = {
  reviews: Review[];
}

export default function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const offer: Offer | null = useAppSelector(offersSelectors.offer);
  const offerStatus = useAppSelector(offersSelectors.offerStatus);
  const nearOffers = useAppSelector(offersSelectors.nearOffers).slice(0, 3);

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearOffers(id));
    }
  }, [id, dispatch]);

  if (offerStatus === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  if (!offer || offerStatus === RequestStatus.Failed) {
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
