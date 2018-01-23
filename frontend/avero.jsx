import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchTables } from './actions/table_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store;
  window.dispatch = store.dispatch
  window.fetchTables = fetchTables;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
