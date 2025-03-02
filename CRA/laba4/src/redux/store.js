import { createStore } from 'redux';
import todoApp from './reducers';


const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Для отладки в Redux DevTools
);

export default store;
