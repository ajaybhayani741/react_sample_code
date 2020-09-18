import { ADD_FAVORITE_NUMBER_BEGIN, GET_FAVORITE_NUMBER_BEGIN } from '../constants/index'
import { changeLoader } from "./loaderAction";
import { favoriteNumberAPI, getFavoriteApi } from '../api/favoriteNumberAPI'

export const favoriteNumberAction = (data, i=null, history, colIndex=null) => async (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_NUMBER_BEGIN
    })
    await favoriteNumberAPI(data, i, dispatch, history.location.pathname, colIndex)
}

export const getFavoriteAction = () => async (dispatch) => {
    dispatch(changeLoader(true))
    dispatch({ type: GET_FAVORITE_NUMBER_BEGIN })
    getFavoriteApi(dispatch)
}

