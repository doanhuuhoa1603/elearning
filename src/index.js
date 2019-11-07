import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Import Reducers
import authReducer from './reducers/auth';
import categoriesReducer from './reducers/categories';
import userReducer from './reducers/user';
import appReducer from './reducers/app';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    user: userReducer,
    app: appReducer,
    toastr: toastrReducer
  })
const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
