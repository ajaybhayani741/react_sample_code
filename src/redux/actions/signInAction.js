import { signInAPI } from "../api/signInAPI";
import { SIGN_IN_REQUEST } from "../constants";


export const signInAction = (formPath, history) => async (dispatch, getState) => {
    dispatch({ type: SIGN_IN_REQUEST })
    const state = getState()
    const { email, password } = { ...state.form.formData[formPath] }
    await signInAPI(email, password, dispatch, history)
};