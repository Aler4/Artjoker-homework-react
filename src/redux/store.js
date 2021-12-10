import {applyMiddleware, createStore} from "redux";
import rootReducers from "./rootReducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {logger} from "redux-logger/src";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export  const initialStore = (() => {
    let store = createStore(persistedReducer,applyMiddleware(logger))
    let persistor = persistStore(store)
    return { store, persistor }
})();

