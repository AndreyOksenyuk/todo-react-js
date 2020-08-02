import { combineReducers, createStore } from 'redux';
import ToDo from './ToDo-reducer'

let reducers = combineReducers({
   ToDo,
})

let store = createStore(reducers)
export default store;