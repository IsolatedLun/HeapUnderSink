import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './imports.css';
import { store } from '../store';

const container = document.getElementById('root') as HTMLElement;
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
