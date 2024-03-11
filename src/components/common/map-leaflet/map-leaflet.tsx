import 'leaflet/dist/leaflet.css';
import {RefObject, useRef} from 'react';
import {City} from '@/types/city';
import {Location} from '@/types/location';
import {Map} from 'leaflet';
import useMapLeaflet from '@/hooks/use-map-leaflet/use-map-leaflet';
import useMapLeafletMarkers from '@/hooks/use-map-leaflet-markers/use-map-leaflet-markers';
import useMapLeafletSetView from '@/hooks/use-map-leaflet-set-view/use-map-leaflet-set-view';

type MapLeafletProps = {
  currentCity: City;
  points: Location[];
  activePoint: Location | null;
  extraClass: string;
}

export default function MapLeaflet({ currentCity, points, activePoint, extraClass }: MapLeafletProps) {
  const mapRef = useRef(null) as RefObject<HTMLFormElement> | null;
  // Создание инстанса карты и добавления на нее слоя изображения карты
  const map = useMapLeaflet(mapRef, currentCity);
  // Добавление на карту слоя маркеров
  useMapLeafletMarkers(map as Map, points, activePoint as Location);
  // Перемещение карты к текущему городу
  useMapLeafletSetView(map as Map, currentCity);

  return (
    <section
      className={`${extraClass} map`}
      ref={mapRef}
    >
    </section>
  );
}
