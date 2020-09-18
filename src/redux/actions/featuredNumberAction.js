import { GET_FEATURED_NUMBERS_BEGIN, UPDATE_FEATURED_NUMBERS } from "../constants";
import { getFeaturedNumbers } from "../api/featuredNumber";
import { changeLoader } from "./loaderAction";
export const featuredNumbersAction = () => async (dispatch) => {
    dispatch({ type: GET_FEATURED_NUMBERS_BEGIN })
    dispatch(changeLoader(true))
    await getFeaturedNumbers(dispatch)
};


export const updateFeatureNumbers = (index, colIndex, updateKey) => {
    console.log('update search', index, colIndex, updateKey)
    return async (dispatch) => {
        dispatch({ type: UPDATE_FEATURED_NUMBERS, payload: { index, colIndex, updateKey } });
    }
}

export default featuredNumbersAction
