import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import HangmanGame from './components/HangmanGame.jsx'
import store from './stores/store';
import '!style!css!sass!./styles.scss';


Provider.childContextTypes = {
  store: React.PropTypes.object
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HangmanGame />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
