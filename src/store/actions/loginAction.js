import * as actionTypes from "./actionTypes";
import { push } from 'react-router-redux';

export const loginUser = (userData) => {
    return dispatch => {
        if(userData.email === 'ayushij.chapter247@gmail.com'){
            dispatch(loginSuccess(userData));
            dispatch(push('/dfjds'))
        }
        else{
            dispatch(loginFailure('Login Failed'));
        }
    }
}

export const loginSuccess = (userData) => {
    return{
        type:actionTypes.LOGIN_SUCCESS,
        userData
    }
}

export const loginFailure = (message) => {
    return{
        type:actionTypes.LOGIN_FAILURE,
        message
    }
}
