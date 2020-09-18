import {
    ADD_USER_INFO_REQUEST,
    ADD_USER_INFO_REQUEST_SUCCESS,
    ADD_USER_INFO_REQUEST_ERROR,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_REQUEST_SUCCESS,
    UPDATE_USER_INFO_REQUEST_ERROR,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_REQUEST_SUCCESS,
    GET_USER_INFO_REQUEST_ERROR
} from '../constants';

export const initialState = {
    loading: false,
    errorMessage: "",
    userInfo: {},
    isSuccess: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_INFO_REQUEST:
            return { ...state, loading: true }
        case ADD_USER_INFO_REQUEST_SUCCESS:
            return { ...state, loading: false, isSuccess: true }
        case ADD_USER_INFO_REQUEST_ERROR:
            return { ...state, loading: false, isSuccess: false, errorMessage: action.payload || "Something went wrong please try again" }
        case GET_USER_INFO_REQUEST:
            return { ...state, loading: true }
        case GET_USER_INFO_REQUEST_SUCCESS:
            return { ...state, loading: false, isSuccess: true, userInfo: action.payload }
        case GET_USER_INFO_REQUEST_ERROR:
            return { ...state, loading: false, isSuccess: false, errorMessage: action.payload || "Something went wrong please try again" }
        case UPDATE_USER_INFO_REQUEST:
            return { ...state, loading: true }
        case UPDATE_USER_INFO_REQUEST_SUCCESS:
            return { ...state, loading: false, isSuccess: true, userInfo: action.payload }
        case UPDATE_USER_INFO_REQUEST_ERROR:
            return { ...state, loading: false, isSuccess: false, errorMessage: action.payload || "Something went wrong please try again" }
        default:
            return state;
    }
};

export default userReducer;