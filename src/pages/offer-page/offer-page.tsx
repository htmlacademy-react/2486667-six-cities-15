import Container from '../../components/common/container/container';
import ExtraContainer from '../../components/common/extra-container/extra-container';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import OfferGallary from '../../components/catalog/offer-gallary/offer-gallary';
import OfferDescription from '../../components/catalog/offer-description/offer-description';
import OfferReviews from '../../components/catalog/offer-reviews/offer-reviews';
import OfferMap from '../../components/catalog/offer-map/offer-map';
import OfferOtherPaces from '../../components/catalog/offer-other-paces/offer-other-paces';

export default function OfferPage(): JSX.Element {
  return (
    <ExtraContainer>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header />

      <Container extraClass="page__main--offer">
        <section className="offer">
          <OfferGallary />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription />

              <OfferReviews isForm />
            </div>
          </div>

          <OfferMap />
        </section>

        <OfferOtherPaces />
      </Container>
    </ExtraContainer>
  );
}
