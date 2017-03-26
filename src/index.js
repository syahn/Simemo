import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { loadState } from './local_storage';
import './index.css';

ReactDOM.render(
  <App loadedState={loadState()}/>,
  document.getElementById('root')
);
