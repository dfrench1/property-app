import { combineReducers } from 'redux'
import userReducer from './User'

export default combineReducers({
    user: userReducer,
})