import {
    SHOW_LOADER,
    HIDE_LOADER
} from "../constants";

const initialState = {
    isLoading: false
}

const LoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { isLoading: true }

        case HIDE_LOADER:
            return { isLoading: false }

        default:
            return { ...state }
    }
}

export default LoaderReducer;