import { SIGN_UP_REQUEST } from "../constants";
import { signupAPI } from "../api/signupAPI";


export const signUpAction = (formPath, history) => async (dispatch, getState) => {
    dispatch({ type: SIGN_UP_REQUEST })
    const state = getState()
    const { email, password } = { ...state.form.formData[formPath] }
    signupAPI(email, password, dispatch, history)

};