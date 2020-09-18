import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST_SUCCESS,
    RESET_PASSWORD_REQUEST_ERROR
} from "../constants";

const initialState = {
    loading: false,
    isSuccess: false,
    errorMessage: "",
}

const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                isSuccess: false,
            }
        case RESET_PASSWORD_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                isSuccess: true
            }
        }
        case RESET_PASSWORD_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                isSuccess: false,
                errorMessage: "Something went wrong please try again",
            }
        default:
            return state
    }
}
export default resetPasswordReducer
