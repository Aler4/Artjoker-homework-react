import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {initialStore} from "./redux/store";
 import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
    <Provider store={initialStore.store}>
        <React.StrictMode>
            <PersistGate loading={null} persistor={initialStore.persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
