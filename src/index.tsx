import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {Offers} from './mocks/offers';
import {Cities} from './mocks/cities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App offers={Offers} cities={Cities} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
