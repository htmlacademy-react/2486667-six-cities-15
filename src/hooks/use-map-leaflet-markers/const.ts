import leaflet from 'leaflet';

import URL_MARKER_DEFAULT from './img/pin.svg';
import URL_MARKER_CURRENT from './img/pin-active.svg';

const DEFAULT_CUSTOM_ICON = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const CURRENT_CUSTOM_ICON = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

export {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CUSTOM_ICON, CURRENT_CUSTOM_ICON};
