import * as React from 'react';
import {render} from 'react-dom';
import Routes from './routes'
import {Provider} from "react-redux";
import {configureStore} from "./store";
const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

const wrapper = document.getElementById('container')
render(<Root />, wrapper)