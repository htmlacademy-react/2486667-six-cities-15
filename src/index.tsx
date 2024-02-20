import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/common/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cards = Array.from({length: 5}, () => '');

root.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>
);
