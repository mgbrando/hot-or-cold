require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

console.log(store.getState());
store.dispatch(actions.guessNumber(15));
console.log(store.getState());
store.dispatch(actions.resetGame());
console.log(store.getState());