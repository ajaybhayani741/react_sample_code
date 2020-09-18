import { CATEGORY_LIST_UPDATE } from "../constants"
import { changeLoader } from "./loaderAction"

export const updateCategoryAction = (title, url) => (dispatch) => {
    dispatch(changeLoader(true))
    setTimeout(() => {
        dispatch({ type: CATEGORY_LIST_UPDATE, payload: { title, url } })
        dispatch(changeLoader(false))
    }, 500)
}
