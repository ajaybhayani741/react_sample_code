import api from "./index";
import { favoriteNumbers, getFavoriteNumbers } from "./urls";
import { ADD_FAVORITE_NUMBER_SUCCESS, ADD_FAVORITE_NUMBER_ERROR, GET_FAVORITE_NUMBER_SUCCESS } from "../constants";
import { showToast } from '../../utils/toastService'
import { changeLoader } from "../actions/loaderAction";
import { updateSearch } from "../actions/SearchResult";
import { updateFeatureNumbers } from "../actions/featuredNumberAction";

export const favoriteNumberAPI = async (body, itemIndex, dispatch, fromPage, colIndex) => {
    console.log('from page', fromPage);
    const { method, url } = favoriteNumbers;
    api(url, method, body, true)
        .then(res => {
            if (res.data) {
                dispatch({
                    type: ADD_FAVORITE_NUMBER_SUCCESS,
                    payload: res.data
                })
                if (itemIndex !== null && itemIndex !== undefined && fromPage === '/search-results') {
                    dispatch(updateSearch(itemIndex, 'favorite')) //UPDATE SEARCH RESULTS DATA
                } else if (fromPage === '/'){
                    console.log('update feature numbers state', colIndex);
                    dispatch(updateFeatureNumbers(itemIndex, colIndex, 'favorite'))
                }
                showToast(res.message||'Item added to favorites successfully !', { type: 'success' })
            } else {
                dispatch({
                    type: ADD_FAVORITE_NUMBER_ERROR,
                    payload: res.message
                })
                showToast(res.message, { type: 'error' })
            }
            // dispatch(changeLoader(false))
        })
        .catch((error) => {
            // var errorCode = error.code;
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({
                type: ADD_FAVORITE_NUMBER_ERROR,
                payload: errorMessage
            })
            // dispatch(changeLoader(false))
        });
};

export const getFavoriteApi = async (dispatch) => {
    const { url, method } = getFavoriteNumbers

    api(url, method, null, true).then(
        res => {
            console.log('res.data', res)
            dispatch({
                type: GET_FAVORITE_NUMBER_SUCCESS,
                data: res.data
            })
            dispatch(changeLoader(false))
        }
    )
}