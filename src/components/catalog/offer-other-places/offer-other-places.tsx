import {Offer} from '@/types/offer';
import OfferCard from '@/components/catalog/offer-card/offer-card';

type OfferOtherPlacesProps = {
  offers: Offer[];
}

export default function OfferOtherPlaces({ offers }: OfferOtherPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>

        <div className="near-places__list places__list">
          {offers && offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} block='near-places' />
          ))}
        </div>
      </section>
    </div>
  );
}
