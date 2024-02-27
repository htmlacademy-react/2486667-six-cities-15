import Container from '../../components/common/container/container';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import OfferGallary from '../../components/catalog/offer-gallary/offer-gallary';
import OfferDescription from '../../components/catalog/offer-description/offer-description';
import OfferReviews from '../../components/catalog/offer-reviews/offer-reviews';
import OfferMap from '../../components/catalog/offer-map/offer-map';
import OfferOtherPlaces from '../../components/catalog/offer-other-places/offer-other-places';
import MainContainer from '../../components/common/main-container/main-container';

export default function OfferNotLoggedPage(): JSX.Element {
  return (
    <Container>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <MainContainer extraClass="page__main--offer">
        <section className="offer">
          <OfferGallary />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription />

              <OfferReviews />
            </div>
          </div>

          <OfferMap />
        </section>

        <OfferOtherPlaces />
      </MainContainer>
    </Container>
  );
}
