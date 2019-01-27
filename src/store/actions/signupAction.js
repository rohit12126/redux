import * as actionTypes from "./actionTypes";
import { push } from 'react-router-redux';
import axios from 'axios';

export const signup = (userData) => {
    return dispatch => {
        dispatch(signupRequest());
        axios.post('http://flowhaus.com/flowhaus/api/signup',userData).then(
            response => {
                console.log(response);
                console.log("response");
                dispatch(signupSuccess(userData));
                localStorage.setItem('token',response.data.token);
                dispatch(push('/home'))
            }
        ).catch(error => {
            dispatch(signupFailure(error));
        });
    }
}

export const signupSuccess = (userData) => {
    return{
        type:actionTypes.SIGNUP_SUCCESS,
        userData
    }
}

export const signupRequest = () => {
    return{
        type:actionTypes.SIGNUP_REQUEST
    }
}

export const signupFailure = (message) => {
    return{
        type:actionTypes.SIGNUP_FAILURE,
        message
    }
}
