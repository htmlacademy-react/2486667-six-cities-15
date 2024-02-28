import {Offer} from '../../../types/offer';
import OfferList from '../offer-list/offer-list';

type OfferOtherPlacesProps = {
  offers: Offer[];
}

export default function OfferOtherPlaces({ offers }: OfferOtherPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <OfferList offers={offers} block='near-places' />
        </div>
      </section>
    </div>
  );
}
