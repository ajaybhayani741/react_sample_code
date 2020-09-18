import api from "../index";
import { deleteFromCartParams } from "../urls";
import { DELETE_FROM_CART_REQUEST_SUCCESS, DELETE_FROM_CART_REQUEST_ERROR, HIDE_LOADER } from "../../constants";
import { showToast } from "../../../utils/toastService";

export const deleteFromCart = async (id, dispatch) => {
    const { method } = deleteFromCartParams;
    let url = `${deleteFromCartParams.url}/${id}`;

    api(url, method, null, true)
        .then(res => {
            // console.log('res', res);
            dispatch({ type: HIDE_LOADER });
            if (res.type === 'success'){
                dispatch({ type: DELETE_FROM_CART_REQUEST_SUCCESS, payload: id })
            } else {
                dispatch({ type: DELETE_FROM_CART_REQUEST_ERROR, payload: res.message })
                showToast(res.message, { type: 'error' })
            }
        })
        .catch((error) => {
            // var errorCode = error.code;
            dispatch({ type: HIDE_LOADER })
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: DELETE_FROM_CART_REQUEST_ERROR, payload: errorMessage })
        });
};