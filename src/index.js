//console.log('hi');
import React from 'react';
import { Router, browserHistory } from 'react-router';
import {render} from 'react-dom';
import 'babel-polyfill';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render(
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes }/>
    </Provider>,
    document.getElementById('app')
);
