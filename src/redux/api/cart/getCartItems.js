import api from "../index";
import { getCartItemsParams } from "../urls";
import { GET_CART_ITEMS_REQUEST_SUCCESS, GET_CART_ITEMS_REQUEST_ERROR, HIDE_LOADER } from "../../constants";
import { showToast } from "../../../utils/toastService";

export const getCartItems = async (dispatch) => {
    const { url, method } = getCartItemsParams
    api(url, method, null, true)
        .then(res => {
            // console.log('res', res)
            dispatch({ type: HIDE_LOADER })
            if (res.data) {
                if(res.data.length>0) {
                    dispatch({ type: GET_CART_ITEMS_REQUEST_SUCCESS, payload: res.data })
                } else {
                    // showToast('ops! something went wrong please try again later', { type: 'error' })
                    dispatch({ type: GET_CART_ITEMS_REQUEST_ERROR, payload: res.message })
                }
            } 
            // else {
            //     dispatch({ type: GET_CART_ITEMS_REQUEST_ERROR, payload: res.message })
            //     showToast(res.message, { type: 'error' })
            // }
        })
        .catch((error) => {
            // var errorCode = error.code;
            dispatch({ type: HIDE_LOADER })
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: GET_CART_ITEMS_REQUEST_ERROR, payload: errorMessage })
        });
};