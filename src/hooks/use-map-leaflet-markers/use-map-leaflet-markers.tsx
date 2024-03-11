import leaflet, {layerGroup} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from './const';
import {useEffect} from 'react';
import {Location} from '@/types/location';
import {Map} from 'leaflet';

export default function useMapLeafletMarkers(map: Map, points: Location[], currentPoint: Location) {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: JSON.stringify(currentPoint) === JSON.stringify(point) ?
              currentCustomIcon :
              defaultCustomIcon,
          })
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, currentPoint, defaultCustomIcon, currentCustomIcon]);
}
