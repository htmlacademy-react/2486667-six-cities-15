import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {Offers} from './mocks/offers';
import {getCities} from './utils/utils';
import {CitiesWithPath} from './mocks/cities-with-path';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App offers={Offers} cities={getCities(Offers)} citiesWithPath={CitiesWithPath} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
