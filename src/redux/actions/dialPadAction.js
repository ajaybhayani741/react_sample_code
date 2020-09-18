import { SEARCH_RESULT_REQUEST } from "../constants";
import { getDialPadResult } from "../api/dialPad";
import { changeLoader } from "./loaderAction";

export const dialPadAction = (data, history) => async (dispatch) => {
    dispatch({ type: SEARCH_RESULT_REQUEST })
    dispatch(changeLoader(true))
    await getDialPadResult(data, history, dispatch)       
};