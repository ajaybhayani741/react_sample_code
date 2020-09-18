import {
    GET_FEATURED_NUMBERS_BEGIN,
    GET_FEATURED_NUMBERS_SUCCESS,
    GET_FEATURED_NUMBERS_ERROR,
    UPDATE_FEATURED_NUMBERS
} from '../constants'

const initialState = {
    loading: false,
    isSuccess: false,
    errorMessage: "",
    featuredNumbers: []
}
const featuredNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEATURED_NUMBERS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case GET_FEATURED_NUMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                featuredNumbers: action.payload,
                isSuccess: true
            }
        case GET_FEATURED_NUMBERS_ERROR:
            return {
                ...state,
                loading: false,
                featuredNumbers: [],
                errorMessage: action.payload || "Something went wrong please try again"
            }
        case UPDATE_FEATURED_NUMBERS:
            const { index, colIndex, updateKey } = action.payload;
            const displayNumbersClone = state.featuredNumbers;
            console.log('data', displayNumbersClone[colIndex].numbers[index]);
            if (updateKey ==='favorite') displayNumbersClone[colIndex].numbers[index].isFavorite = !displayNumbersClone[colIndex].numbers[index].isFavorite;
            return {
                ...state,
                loading: false,
                featuredNumbers: displayNumbersClone,
            }
        default:
            return {
                ...state
            }
    }
}

export default featuredNumberReducer





