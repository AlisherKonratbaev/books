import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {GlobalStyle} from "./assets/styles/main";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
