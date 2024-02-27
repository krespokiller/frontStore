// store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Si estás utilizando funciones asíncronas en tus acciones
import rootReducer from './reducer/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
