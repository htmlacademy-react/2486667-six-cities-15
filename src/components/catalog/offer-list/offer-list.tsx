import {Offer} from "../../../types/offer";
import OfferCard from "../offer-card/offer-card";

type OfferListProps = {
  offers: Offer[];
  activeCardId: string;
}

export default function OfferList({ offers, activeCardId }: OfferListProps) {
  return offers && offers.map((offer) => (
    <OfferCard key={offer.id} offer={offer} activeCardId={activeCardId} />
  ));
}
