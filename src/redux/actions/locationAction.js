import { locationAPI } from "../api/locationAPI"
import { CATEGORY_LIST_BEGIN } from '../constants'
import { changeLoader } from "./loaderAction"

export const locationAction = (id, title, link, url) => dispatch => {
    dispatch(changeLoader(true))
    dispatch({ type: CATEGORY_LIST_BEGIN, payload: { locationUrl: url } })
    locationAPI(id, title, link, dispatch)
}
