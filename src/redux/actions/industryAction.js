import { industryAPI } from "../api/industryAPI"
import { CATEGORY_LIST_BEGIN } from '../constants'
import { changeLoader } from "./loaderAction"

export const industryAction = (id, title, link, url) => dispatch => {
    dispatch(changeLoader(true))
    dispatch({ type: CATEGORY_LIST_BEGIN, payload: { locationUrl: url } })
    industryAPI(id, title, link, dispatch, url)
}
