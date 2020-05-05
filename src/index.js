import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
<<<<<<< HEAD
 // import 'lib-flexible';
import '@material-ui/core';
=======
import 'lib-flexible';
import filters from "./filters"
React.Component.prototype.$filters = filters;
>>>>>>> fc3a7c8c901f22e0cd1e774ea428bfdcdbcb4f68
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
