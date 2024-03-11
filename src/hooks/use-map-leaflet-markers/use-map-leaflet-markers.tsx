import leaflet, {layerGroup} from 'leaflet';
import {DEFAULT_CUSTOM_ICON, CURRENT_CUSTOM_ICON} from './const';
import {useEffect} from 'react';
import {Location} from '@/types/location';
import {Map} from 'leaflet';

export default function useMapLeafletMarkers(map: Map, points: Location[], currentPoint: Location) {
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
              CURRENT_CUSTOM_ICON :
              DEFAULT_CUSTOM_ICON,
          })
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, currentPoint]);
}
