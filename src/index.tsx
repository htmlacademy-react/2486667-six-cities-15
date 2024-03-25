import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { HelmetProvider } from 'react-helmet-async';
import {CITIES} from './mocks/cities';
import ScrollToTop from './components/common/scroll-to-top/scroll-to-top';
import {Provider} from 'react-redux';
import {store} from '@/store';
import browserHistory from '@/browser-history';
import HistoryRouter from '@/components/common/history-route/history-route';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <App cities={CITIES} />
        </Provider>
      </HistoryRouter>
    </HelmetProvider>
  </React.StrictMode>
);
