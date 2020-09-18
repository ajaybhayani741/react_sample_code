import api from "."
import { industrySearch } from "./urls";
import {
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_ERROR
} from '../constants'
import { showToast } from "../../utils/toastService";
import { changeLoader } from "../actions/loaderAction";

export const industryAPI = async (id, title, link, dispatch, locationUrl) => {
    const { url, method, header } = industrySearch
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