import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './css/tailwind.css';
import './css/custom.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    "selectedParent":{},
    "currentParents":{},
    "currentChilds":{}
}

const store = createStore(reducer, initialState);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
     <App />
 </Provider>
  );
