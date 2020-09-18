import api from "./index";
import { massSearch } from "./urls";
import { SEARCH_RESULT_REQUEST_SUCCESS, SEARCH_RESULT_REQUEST_ERROR } from "../constants";
import { showToast } from "../../utils/toastService";
import { changeLoader } from "../actions/loaderAction";
import { massSearchTab } from "../../descriptions/multiSearch";

export const getMassSearchResult = async (params, history, dispatch) => {
    const { url, method } = massSearch;
    const body = { phones: params };
    api(url, method, body, false).then(res => {
        const { data } = res;
        // console.log('res', data)
        if (data.type !== 'error') {
            history.push({
                pathname: '/search-results',
            })
            const payload = { data: data, activeTab: massSearchTab, searchParams: { [massSearchTab]: params } };
            dispatch({ type: SEARCH_RESULT_REQUEST_SUCCESS, payload });
        } else {
            dispatch({ type: SEARCH_RESULT_REQUEST_ERROR, payload: data.message })
            showToast(data.message || 'something went wrong!!', { type: 'error' })
        }
        dispatch(changeLoader(false))
    })
        .catch((error) => {
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: SEARCH_RESULT_REQUEST_ERROR, payload: errorMessage })
            dispatch(changeLoader(false))
        });
};