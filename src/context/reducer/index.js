import encryptor from './encryptor';
import storage from 'redux-persist/lib/storage';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import { Todo } from './todoList';
const userPersistConfig = {
  key: 'front-end-app',
  storage: storage,
  transforms: [encryptor],
  blacklist: ['router', 'loader'],
};
const rootReducer = persistCombineReducers(userPersistConfig, {
  Todo
});

const rootReducerWithLogout = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // Clear storage on logout
    storage.removeItem('persist:front-end-app');
    state = undefined;
  }
  return rootReducer(state, action);
};

// Export with the same name
export default rootReducerWithLogout;
