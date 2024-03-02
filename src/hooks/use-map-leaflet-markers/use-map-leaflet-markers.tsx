import leaflet from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {useEffect} from 'react';
import {Location} from '../../types/location';
import {Map} from 'leaflet';

export default function useMapLeafletMarkers(map: Map, points: Location[], currentPoint: Location) {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
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
          .addTo(map);
      });
    }
  }, [map, points, currentPoint, defaultCustomIcon, currentCustomIcon]);
}
