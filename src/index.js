import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './css/tailwind.css';
import './css/custom.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import {mainReducer} from './reducers/index';
import {logActions} from "./middlewares/index";
import thunk from 'redux-thunk';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logActions));


const store = createStore(mainReducer, composedEnhancers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
     <App />
 </Provider>
  );
