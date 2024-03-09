import {Offer} from '@/types/offer';
import {DEFAULT_CITY} from '@/utils/const';
import {Location} from '@/types/location';
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';

type MapProps = {
  offers: Offer[];
  activePoint: Location | null;
  extraClass: string;
}

export default function OffersMap({ offers, activePoint, extraClass }: MapProps) {
  const points = offers.map((offer) => offer.location);

  return (
    <MapLeaflet
      city={DEFAULT_CITY}
      points={points}
      activePoint={activePoint}
      extraClass={extraClass}
    />
  );
}
