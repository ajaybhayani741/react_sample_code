import api from "."
import { locationSearch } from "./urls";
import {
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_ERROR
} from '../constants'
import { showToast } from "../../utils/toastService";
import { changeLoader } from "../actions/loaderAction";

export const locationAPI = async (id, title, link, dispatch, locationUrl) => {
    const { url, method, header } = locationSearch
    await api(url + id, method, null, header)
        .then(res => {
            const { data, message, type } = res
            if (type !== 'error') {
                const payload = { data, title, link, locationUrl };
                dispatch({ type: CATEGORY_LIST_SUCCESS, payload });
            } else {
                dispatch({ type: CATEGORY_LIST_ERROR, payload: message })
                showToast(message || 'something went wrong!!', { type: 'error' })
            }
            dispatch(changeLoader(false))
        })
}