import { SHOW_LOADER, HIDE_LOADER } from "../constants";

export const changeLoader = (data) => async (dispatch) => {
   data ? dispatch({ type: SHOW_LOADER }) : dispatch({type: HIDE_LOADER})
};