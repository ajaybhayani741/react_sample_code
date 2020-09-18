import api from "../index";
import { addToCartParams } from "../urls";
import { ADD_TO_CART_REQUEST_SUCCESS, ADD_TO_CART_REQUEST_ERROR } from "../../constants";
import { showToast } from "../../../utils/toastService";
import { changeLoader } from "../../actions/loaderAction";
import { updateSearch } from "../../actions/SearchResult";
import featuredNumbersAction from "../../actions/featuredNumberAction";

export const addToCart = async (body, itemIndex, dispatch, fromPage) => {
    console.log('itemIndex', itemIndex, fromPage)
    const { url, method } = addToCartParams
    api(url, method, body, true)
        .then(res => {
            const { message, data, type } = res;
            if (type === 'success') {
                dispatch({ type: ADD_TO_CART_REQUEST_SUCCESS, payload: data })
                if (itemIndex !== null && itemIndex !== undefined && fromPage === '/search-results') {
                    dispatch(updateSearch(itemIndex, 'add-cart')) //UPDATE SEARCH RESULTS DATA
                } else if (fromPage === '/') {
                    dispatch(featuredNumbersAction())
                }
                showToast(message, { type: 'success' });
            } else {
                dispatch({ type: ADD_TO_CART_REQUEST_ERROR, payload: message })
                showToast(message, { type: 'error' })
            }
            dispatch(changeLoader(false))
        })
        .catch((error) => {
            // var errorCode = error.code;
            console.log(error);
            dispatch(changeLoader(false))
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: ADD_TO_CART_REQUEST_ERROR, payload: errorMessage })
        });
};