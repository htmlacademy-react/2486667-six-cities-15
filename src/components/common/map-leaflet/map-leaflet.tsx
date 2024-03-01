import 'leaflet/dist/leaflet.css';
import {RefObject, useRef} from 'react';
import {City} from '../../../types/city';
import useMapLeaflet from '../../../hooks/use-map-leaflet/use-map-leaflet';

type MapLeafletProps = {
  city: City;
}

export default function MapLeaflet({ city }: MapLeafletProps) {
  const mapRef = useRef(null) as RefObject<HTMLFormElement> | null;
  const map = useMapLeaflet(mapRef, city);

  return (
    <section
      className="cities__map map-leaflet"
      ref={mapRef}
    >
    </section>
  );
}
