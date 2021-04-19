import {createStore} from 'redux';
import usuarioReduce from './usuarioReduce';

const store = createStore (usuarioReduce);
export default store;