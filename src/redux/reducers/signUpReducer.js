import { SIGN_UP_REQUEST, SIGN_UP_REQUEST_SUCCESS, SIGN_UP_REQUEST_ERROR } from "../constants";

const initialState = {
    loading: false,
    isSuccess: false,
    errorMessage: "",
    userDetails: {}
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGN_UP_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                isSuccess: true
            }
        }
        case SIGN_UP_REQUEST_ERROR:
            const { errorMsg } = action.payload
            return {
                ...state,
                loading: false,
                errorMessage: errorMsg || "Something went wrong please try again",
                userDetails: {}
            }
        default:
            return state
    }
}
export default signUpReducer
