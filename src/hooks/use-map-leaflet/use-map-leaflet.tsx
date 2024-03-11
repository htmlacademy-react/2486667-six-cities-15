import {RefObject, useEffect, useRef, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City} from '@/types/city';
import {Map} from 'leaflet';
import {TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL_PATTERN} from './consts';

export default function useMapLeaflet(mapRef: RefObject<HTMLFormElement> | null, currentCity: City) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef && mapRef?.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: currentCity.location.zoom,
      });

      leaflet
        .tileLayer(
          TILE_LAYER_URL_PATTERN,
          {
            attribution: TILE_LAYER_ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentCity]);

  return map;
}
