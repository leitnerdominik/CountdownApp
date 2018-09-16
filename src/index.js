import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import timeReducer from './store/reducers/time';
import settingsReducer from './store/reducers/settings';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    time: timeReducer,
    settings: settingsReducer
});

const store = createStore(rootReducer, composeEnhancers());

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById("root"));
