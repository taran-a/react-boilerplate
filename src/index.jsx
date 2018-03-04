import React from 'react';
import { store } from './config/store';
import ReactDOM from 'react-dom';
import App from './components/App';

const container = document.getElementById('application');

ReactDOM.render(
    <App store={store} />,
    container,
);
