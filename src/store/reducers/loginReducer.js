const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    userProfile: '',
    error:''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoggingIn:true,
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:true,
                userProfile:action.userData
            }
        case 'LOGIN_FAILURE':
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:false,
                error:action.message
            }
        default:
            return state
    }
}

export default loginReducer;