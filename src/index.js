//console.log('hi');
import React from 'react';
import { Router, browerHistory } from 'react-router';
import {render} from 'react-dom';
import 'babel-polyfill';
import routes from './routes';
import '.styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min';

render(
    <Router history={browerHistory} routes={routes}/>,
    document.createElementById('app')
);
