import {Offer} from '../../../types/offer';

type MapProps = {
  offers: Offer[];
}

export default function OffersMap({ offers }: MapProps) {
  return (
    <>
      {/*<section className="cities__map map"></section>*/}
      {offers && offers.map((offer) => (
        <div key={offer.id}>{offer.city.name} - {offer.city.location.latitude}, {offer.city.location.longitude}</div>
      ))}
    </>
  );
}
