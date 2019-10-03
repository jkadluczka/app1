import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import { getAllPosts } from './actions';

const enhancer = 
process.env.NODE_ENV !== "production"
    ? typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "App",
        actionsBlacklist: []
    })
    : compose
    : compose

const store = createStore(reducer, {}, enhancer(applyMiddleware(thunk)))

store.dispatch(getAllPosts())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
