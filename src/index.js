import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from 'store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

/*
applikasyon başlar
*/

const middleware = [thunk];
const store = createStore(
  reducers,
  typeof window !== 'undefined' && window.initialStoreData ? window.initialStoreData : {},
  composeWithDevTools(applyMiddleware(...middleware)),
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);