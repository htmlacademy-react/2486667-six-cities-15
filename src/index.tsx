import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { HelmetProvider } from 'react-helmet-async';
import {CITIES} from './mocks/cities';
import {REVIEWS} from '@/mocks/reviews';
import ScrollToTop from './components/common/scroll-to-top/scroll-to-top';
import {Provider} from 'react-redux';
import {store} from '@/store';
import {checkAuthAction, fetchOffersAction} from '@/store/api-actions';
import browserHistory from '@/browser-history';
import HistoryRouter from '@/components/common/history-route/history-route';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Provider store={store}>
          <ToastContainer />
          <App cities={CITIES} reviews={REVIEWS} />
        </Provider>
      </HistoryRouter>
    </HelmetProvider>
  </React.StrictMode>
);
