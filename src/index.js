import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '../src/index.css';
import { Provider } from 'react-redux';
import Store from './app/Store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
