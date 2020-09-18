import api from "./index";
import { featuredNumbers } from "./urls";
import { GET_FEATURED_NUMBERS_SUCCESS, GET_FEATURED_NUMBERS_ERROR } from "../constants";
import { showToast } from '../../utils/toastService'
import { isLoggedIn } from "../../utils/authentication";
import { changeLoader } from "../actions/loaderAction";

export const getFeaturedNumbers = async (dispatch) => {
    const { method } = featuredNumbers;
    const isLogged = isLoggedIn()
    let url = featuredNumbers.url;
    // console.log('is login', isLogged)
    url = isLogged ? (url + '/true') : (url + '/false')
    const header = isLogged ? true : false
    api(url, method, null, header)
        .then(res => {
            // console.log('res', res)
            if (res.data) {
                dispatch({
                    type: GET_FEATURED_NUMBERS_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: GET_FEATURED_NUMBERS_ERROR,
                    payload: res.message
                })
                showToast(res.message, { type: 'error' })
            }
            dispatch(changeLoader(false))
        })
        .catch((error) => {
            // var errorCode = error.code;
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({
                type: GET_FEATURED_NUMBERS_ERROR,
                payload: errorMessage
            })
            dispatch(changeLoader(false))
        });
};

