const initialState = {
    isSigningIn: false,
    isSignedIn: false,
    userProfile: '',
    error:''
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_REQUEST':
            return {
                ...state,
                isSigningIn:true,
            }
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                isSigningIn:false,
                isSignedIn:true,
                userProfile:action.userData
            }
        case 'SIGNUP_FAILURE':
            return{
                ...state,
                isSigningIn:false,
                isSignedIn:false,
                error:action.message
            }
        default:
            return state
    }
}

export default signupReducer;