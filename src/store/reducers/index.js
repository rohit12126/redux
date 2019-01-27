import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    loginReducer, 
    signupReducer
})

export default rootReducer;