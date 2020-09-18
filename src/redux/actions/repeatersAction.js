import { repeatersAPI } from "../api/repeatersAPI"
import { CATEGORY_LIST_BEGIN } from '../constants'
import { changeLoader } from "./loaderAction"

export const repeatersAction = (id, title, link, url) => dispatch => {
    dispatch(changeLoader(true))
    dispatch({ type: CATEGORY_LIST_BEGIN, payload: { locationUrl: url } })
    repeatersAPI(id, title, link, dispatch,url)
}
