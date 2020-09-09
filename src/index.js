import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/reducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { register } from './redux/actions'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import JavascriptTimeAgo from 'javascript-time-ago'
 
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.addLocale(en)

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(register())
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
