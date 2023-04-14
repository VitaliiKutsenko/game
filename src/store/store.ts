import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from '@src/store/indexReducer';

const enhancer = composeWithDevTools(applyMiddleware());

export const configureStore = (preloadState: any) => {
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
