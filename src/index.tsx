import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {OFFERS} from './mocks/offers';
import {CITIES} from './mocks/cities';
import {REVIEWS} from '@/mocks/reviews';
import ScrollToTop from './components/common/scroll-to-top/scroll-to-top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App offers={OFFERS} cities={CITIES} reviews={REVIEWS} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
