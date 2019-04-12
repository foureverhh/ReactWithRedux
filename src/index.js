//console.log('hi');
import React from 'react';
import { Router, browserHistory } from 'react-router';
import {render} from 'react-dom';
import 'babel-polyfill';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);
