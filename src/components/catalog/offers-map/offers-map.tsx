import {Offer} from '../../../types/offer';
import MapLeaflet from '../../common/map-leaflet/map-leaflet';
import {DEFAULT_CITY} from '../../../const';
import {Location} from '../../../types/location';

type MapProps = {
  offers: Offer[];
  currentPoint: Location | null;
}

export default function OffersMap({ offers, currentPoint }: MapProps) {
  //const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);

  const points = offers.map((offer) => DEFAULT_CITY ? offer.location : null) as Location[];

  return (
    <MapLeaflet
      city={DEFAULT_CITY}
      points={points}
      currentPoint={currentPoint}
      extraClass="cities__map"
    />
  );
}
