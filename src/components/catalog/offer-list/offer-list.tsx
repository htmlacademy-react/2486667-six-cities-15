import {Offer} from '../../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {useState} from 'react';

type OfferListProps = {
  offers: Offer[];
}

export default function OfferList({ offers }: OfferListProps): JSX.Element[] {
  const [activeCardId, setActiveCardId] = useState<Offer['id']>('');

  const handleMouseOver = (id: string) => {
    setActiveCardId(id);
  };

  return offers && offers.map((offer) => (
    <OfferCard key={offer.id} offer={offer} handleMouseOver={handleMouseOver} />
  ));
}
