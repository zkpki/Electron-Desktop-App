import React from 'react';
import ReactDOM from 'react-dom';

import './styles';
import App from './App';

window.Promise = require('bluebird');
window.axios = require('axios').default;
window.moment = require('moment-timezone');

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
