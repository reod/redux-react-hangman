import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';

const appReducer = combineReducers({ ...reducers });

const rootReducer = (state, action) => {
  if (action.type === 'RESET_GAME') {
    state = undefined;
  }

  return appReducer(state, action);
}

const store = createStore(rootReducer);

export default store;