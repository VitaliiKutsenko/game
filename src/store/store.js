import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './indexReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const enhancer = composeWithDevTools(applyMiddleware());

export const configureStore = preloadState => {
  return createStore(persistedReducer, preloadState, enhancer);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['baseParams', 'championsParams', 'skills', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({});
export const persistor = persistStore(store);
