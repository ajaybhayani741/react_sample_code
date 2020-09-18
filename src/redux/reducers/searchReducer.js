import {
    SEARCH_RESULT_REQUEST,
    SEARCH_RESULT_REQUEST_SUCCESS,
    SEARCH_RESULT_REQUEST_ERROR,
    UPDATE_SEARCH_RESULTS
} from "../constants";

const initialState = {
    loading: false,
    isSuccess: false,
    errorMessage: "",
    searchResult: {},
    activeTab: '',
    searchParams: ''
}

const SearchResult = (state = initialState, action) => {

    switch (action.type) {

        case SEARCH_RESULT_REQUEST:
            return { ...state, loading: true }

        case SEARCH_RESULT_REQUEST_SUCCESS:
            const { data, activeTab, searchParams } = action.payload
            return { ...state, loading: false, searchResult: data, activeTab, searchParams, isSuccess: true }

        case UPDATE_SEARCH_RESULTS:
            const addedItemIndex = action.payload.index;
            const updateKey = action.payload.updateKey;
            const searchResultClone = state.searchResult;
            switch (updateKey) {
                case 'add-cart':
                    searchResultClone[addedItemIndex].isAdded = true;
                    searchResultClone[addedItemIndex].status = 'unavailable';
                    break;
                case 'favorite':
                    searchResultClone[addedItemIndex].isFavorite = true;
                    break;
                default:
                    break;
            }
          
            console.log('updated search results ', searchResultClone)

            return { ...state, isSuccess: true, searchResult: searchResultClone}

        case SEARCH_RESULT_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                searchParams: '',
                searchResult: {},
                activeTab: '',
                errorMessage: action.payload || "Something went wrong please try again"
            }

        default:
            return { ...state }
    }
}

export default SearchResult;
