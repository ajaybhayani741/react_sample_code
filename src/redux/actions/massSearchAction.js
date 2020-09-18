import { SEARCH_RESULT_REQUEST } from "../constants";
import { getMassSearchResult } from "../api/massSearch";
import { changeLoader } from "./loaderAction";


export const massSearchAction = (data, history) => async (dispatch) => {
    dispatch({ type: SEARCH_RESULT_REQUEST })
    dispatch(changeLoader(true))
   await getMassSearchResult(data, history, dispatch)        
};