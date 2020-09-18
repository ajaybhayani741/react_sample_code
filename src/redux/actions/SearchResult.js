// import api from "../api";
import {
    SEARCH_RESULT_REQUEST,
    SEARCH_RESULT_REQUEST_SUCCESS,
    SEARCH_RESULT_REQUEST_ERROR,
    UPDATE_SEARCH_RESULTS
} from '../constants';

import data from '../../descriptions/searchresult';

export const searchResult = (body) => {

    return async (dispatch) => {
        dispatch({ type: SEARCH_RESULT_REQUEST });
        try {
            // const res = await api('/search-result', 'POST', body, true);
            const res = { data: data };
            if (res.data) {
                dispatch({ type: SEARCH_RESULT_REQUEST_SUCCESS, payload: res.data });
            } else {
                dispatch({ type: SEARCH_RESULT_REQUEST_ERROR, payload: res.message });
            }
        } catch (error) {
            dispatch({ type: SEARCH_RESULT_REQUEST_ERROR });
        }
    }
};

export const updateSearch = (index, updateKey) => {
    console.log('update search', index, updateKey)
    return async (dispatch) => {
        dispatch({ type: UPDATE_SEARCH_RESULTS, payload: { index, updateKey } });
    }
}
