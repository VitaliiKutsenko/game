import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from '@src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from '@src/app';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
