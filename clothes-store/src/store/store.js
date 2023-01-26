import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {logger} from "redux-logger/src";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
