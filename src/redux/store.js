import {applyMiddleware, createStore} from "redux";
import rootReducers from "./rootReducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import {logger} from "redux-logger/src";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga"

const persistConfig = {
    key: 'key',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducers, hardSet)
const sagaMiddleware = createSagaMiddleware();

export  const initialStore = (() => {
    let store = createStore(persistedReducer,applyMiddleware(sagaMiddleware,logger))
    let persistor = persistStore(store);

    sagaMiddleware.run(rootSaga)
    return { store, persistor}
})();

