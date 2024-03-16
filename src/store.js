import { createStore, combineReducers } from 'redux'
import authReducer from './featuress/authenticSlice'
import counterReducer from './featuress/counterSlice'


const rootReducer = combineReducers({
  authentic: authReducer,
  counter: counterReducer
})

const store = createStore(rootReducer)

export default store
