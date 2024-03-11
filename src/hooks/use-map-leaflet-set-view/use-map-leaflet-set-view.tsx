import {useEffect} from 'react';
import {Map} from 'leaflet';
import {City} from '@/types/city';

export default function useMapLeafletSetView(map: Map, currentCity: City): void {
  useEffect(() => {
    if (map) {
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
    }
  }, [map, currentCity]);
}
