import {Offer} from '../../../types/offer';
import MapLeaflet from '../../common/map-leaflet/map-leaflet';
import {DEFAULT_CITY} from "../../../const";

type MapProps = {
  offers: Offer[];
}

export default function OffersMap({ offers }: MapProps) {
  return (
    <>
      {/*<section className="cities__map map-leaflet"></section>*/}
      {/*{offers && offers.map((offer) => (
        <div key={offer.id}>{offer.city.name} - {offer.city.location.latitude}, {offer.city.location.longitude}</div>
      ))}*/}
      <MapLeaflet city={DEFAULT_CITY} />
    </>
  );
}
