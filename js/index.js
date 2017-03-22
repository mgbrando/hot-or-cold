require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Game from './components/game';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Provider store={store}><Game /></Provider>, document.getElementById('app'))
);



/*console.log(store.getState());
store.dispatch(actions.guessNumber(15));
console.log(store.getState());
store.dispatch(actions.resetGame());
console.log(store.getState());*/