import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {initialStore} from "./redux/store";
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
console.log(initialStore.store.getState())
console.log(initialStore.persistor.getState())
ReactDOM.render(
    <PersistGate loading={null} persistor={initialStore.persistor}>
    <Provider store={initialStore.store}>
        <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </React.StrictMode>
    </Provider>
    </PersistGate>
    ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
