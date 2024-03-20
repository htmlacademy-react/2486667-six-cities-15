import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {CITIES} from './mocks/cities';
import {REVIEWS} from '@/mocks/reviews';
import ScrollToTop from './components/common/scroll-to-top/scroll-to-top';
import {Provider} from 'react-redux';
import {store} from '@/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
          <App cities={CITIES} reviews={REVIEWS} />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
