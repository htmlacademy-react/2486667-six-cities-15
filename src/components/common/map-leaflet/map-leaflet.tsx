import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MutableRefObject, useRef} from "react";

export default function MapLeaflet() {
  const mapRef = useRef(null);

  return (
    <div
      style={{height: '400px'}}
      ref={mapRef}
    >
    </div>
  );
}
