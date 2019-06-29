import * as React from 'react';
import {render} from 'react-dom';
import App from './app';

import {Provider} from "react-redux";
import {configureStore} from "./store";
const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

const wrapper = document.getElementById('container')
render(<Root />, wrapper)