import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './store/reducers/time';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById("root"));
