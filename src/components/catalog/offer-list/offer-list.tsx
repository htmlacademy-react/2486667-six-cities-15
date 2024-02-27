import {Offer} from '../../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  handleMouseOver: (id: Offer['id']) => void;
}

export default function OfferList({ offers, handleMouseOver }: OfferListProps): JSX.Element[] {
  return offers && offers.map((offer) => (
    <OfferCard key={offer.id} offer={offer} handleMouseOver={handleMouseOver} />
  ));
}
