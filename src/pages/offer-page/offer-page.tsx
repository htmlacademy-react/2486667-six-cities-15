import Container from '../../components/common/container/container';
import ExtraContainer from '../../components/common/extra-container/extra-container';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import OfferGallary from '../../components/catalog/offer-gallary/offer-gallary';
import OfferDescription from '../../components/catalog/offer-description/offer-description';
import OfferReviews from '../../components/catalog/offer-reviews/offer-reviews';
import OfferMap from '../../components/catalog/offer-map/offer-map';
import OfferOtherPlaces from '../../components/catalog/offer-other-places/offer-other-places';
import {useParams} from "react-router-dom";
import {Offers} from '../../mocks/offers';

export default function OfferPage(): JSX.Element {
  const { id } = useParams();
  const offer = Offers.find((offer) => offer.id === id);

  return (
    <ExtraContainer>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <Container extraClass="page__main--offer">
        <section className="offer">
          <OfferGallary images={offer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription offer={offer} />

              <OfferReviews isAuth />
            </div>
          </div>

          <OfferMap />
        </section>

        <OfferOtherPlaces />
      </Container>
    </ExtraContainer>
  );
}
