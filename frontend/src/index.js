// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import { render } from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './state-management/store';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import './index.css';



render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);

// If you wan