import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cards = Array.from({length: 5}, () => '');

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App cards={cards}/>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
