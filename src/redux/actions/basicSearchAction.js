import {
    SEARCH_RESULT_REQUEST
} from '../constants'
import { showToast } from '../../utils/toastService'
import { basicSearchAPI } from '../api/basicSearchAPI'
import { changeLoader } from './loaderAction'


export const basicSearchAction = (formPath, history) => (dispatch, getState) => {
    const state = getState()
    const basicSearch = { ...state.form.formData[formPath] }
    dispatch(changeLoader(true))
    dispatch({ type: SEARCH_RESULT_REQUEST })
    if (Object.entries(basicSearch).length) {
        const { price, ...rest } = basicSearch
        let startPrice = 0, endPrice = 500
        if (price) {
            startPrice = price.min
            endPrice = price.max
        }
        basicSearchAPI({ startPrice, endPrice, ...rest }, history, dispatch)
    }
    else {
        showToast('Select any of the fields', { type: 'error' })
        dispatch(changeLoader(false))
    }

}


