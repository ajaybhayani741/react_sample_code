import api from "./index";
import { dialPad } from "./urls";
import { SEARCH_RESULT_REQUEST_SUCCESS, SEARCH_RESULT_REQUEST_ERROR } from "../constants";
import { showToast } from "../../utils/toastService";
import { changeLoader } from "../actions/loaderAction";
import { dialPadTab } from '../../descriptions/multiSearch'

export const getDialPadResult = async (params, history, dispatch) => {
    const { url, method } = dialPad
    const body = { dialpad: params };
    api(url, method, body, false)
        .then(res => {
            const { data } = res;
            // console.log('res', data)
            if (data.type !== 'error') {
                const payload = {
                    data: data, activeTab: dialPadTab, searchParams: { [dialPadTab] : params } };
                dispatch({ type: SEARCH_RESULT_REQUEST_SUCCESS, payload });
                history.push({
                    pathname: '/search-results',
                })
            } else {
                dispatch({ type: SEARCH_RESULT_REQUEST_ERROR, payload: data.message })
                showToast(data.message, { type: 'error' })
            }
            dispatch(changeLoader(false))
        })
        .catch((error) => {
            // var errorCode = error.code;
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: SEARCH_RESULT_REQUEST_ERROR, payload: errorMessage })
            dispatch(changeLoader(false))
        });
};