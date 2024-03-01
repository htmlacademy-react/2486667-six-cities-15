import {Offer} from '../../../types/offer';
import MapLeaflet from '../../common/map-leaflet/map-leaflet';

type MapProps = {
  offers: Offer[];
}

export default function OffersMap({ offers }: MapProps) {
  return (
    <>
      {/*<section className="cities__map map-leaflet"></section>*/}
      {offers && offers.map((offer) => (
        <div key={offer.id}>{offer.city.name} - {offer.city.location.latitude}, {offer.city.location.longitude}</div>
      ))}
      <MapLeaflet />
    </>
  );
}
