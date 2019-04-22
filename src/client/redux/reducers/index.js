import { combineReducers } from 'redux'
import userReducer from './User'
import flashReducer from './Flash'


export default combineReducers({
    user: userReducer,
    flash: flashReducer
})