import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);