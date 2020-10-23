import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Filmes from './pages/filmes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Filmes />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
