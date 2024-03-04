import 'leaflet/dist/leaflet.css';
import {RefObject, useRef} from 'react';
import {City} from '../../../types/city';
import {Location} from '../../../types/location';
import useMapLeaflet from '../../../hooks/use-map-leaflet/use-map-leaflet';
import useMapLeafletMarkers from '../../../hooks/use-map-leaflet-markers/use-map-leaflet-markers';
import {Map} from 'leaflet';

type MapLeafletProps = {
  city: City;
  points: Location[];
  activePoint: Location | null;
  extraClass: string;
}

export default function MapLeaflet({ city, points, activePoint, extraClass }: MapLeafletProps) {
  const mapRef = useRef(null) as RefObject<HTMLFormElement> | null;
  const map = useMapLeaflet(mapRef, city);
  useMapLeafletMarkers(map as Map, points, activePoint as Location);

  return (
    <section
      className={`${extraClass} map`}
      ref={mapRef}
    >
    </section>
  );
}
