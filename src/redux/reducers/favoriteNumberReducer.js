import {
    ADD_FAVORITE_NUMBER_BEGIN,
    ADD_FAVORITE_NUMBER_SUCCESS,
    ADD_FAVORITE_NUMBER_ERROR,
    GET_FAVORITE_NUMBER_SUCCESS,
    GET_FAVORITE_NUMBER_BEGIN,
    GET_FAVORITE_NUMBER_ERROR,
} from '../constants'

const initialState = {
    errorMessage: "",
    favoriteNumbers: [],
    isSuccess: false
}

const FavotriteNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_NUMBER_BEGIN:
            return { ...state, isSuccess: false }
        case ADD_FAVORITE_NUMBER_SUCCESS:
            return {
                ...state,
                favoriteNumbers: action.payload,
                isSuccess: true
            }
        case ADD_FAVORITE_NUMBER_ERROR:
            return {
                ...state,
                favoriteNumbers: [],
                errorMessage: action.payload || "Something went wrong please try again"
            }
        case GET_FAVORITE_NUMBER_BEGIN:
            return {
                ...state,
            }
        case GET_FAVORITE_NUMBER_SUCCESS:
            return {
                ...state,
                favoriteNumbers: action.data

            }
        case GET_FAVORITE_NUMBER_ERROR:
            return {
                ...state,
            }

        default:
            return { ...state }
    }
}
export default FavotriteNumberReducer