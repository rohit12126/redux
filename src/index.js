import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './store/reducers/index';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'

const history = createBrowserHistory();
let middleware = [
    thunk, // lets us dispatch() functions
    routerMiddleware(history), 
  ]
const store = createStore(rootReducer, applyMiddleware(
    ...middleware
  ));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

