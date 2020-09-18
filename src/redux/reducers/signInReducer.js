import {SIGN_IN_REQUEST, SIGN_IN_REQUEST_SUCCESS, SIGN_IN_REQUEST_ERROR} from "../constants";

const initialState = {
    loading: false,
    isSuccess: false,
    errorMessage: "",
    userDetails: {}
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case SIGN_IN_REQUEST_SUCCESS: {
            // const { userData } = action.payload
            return {
                ...state, 
                // userDetails: userData, 
                loading: false, 
                isSuccess: true
            }
        }
        case SIGN_IN_REQUEST_ERROR:
           console.log('error payload', action.payload)
            return {
                ...state, 
                loading: false, 
                errorMessage: "Something went wrong please try again",
                userDetails: {}
            }
        default:
            return state
    }
}
export default signInReducer
