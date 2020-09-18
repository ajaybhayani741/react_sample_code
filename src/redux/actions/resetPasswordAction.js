import { RESET_PASSWORD_REQUEST } from "../constants";
import { resetPasswordAPI } from "../api/resetPasswordAPI";


export const resetPasswordAction = formPath => async (dispatch, getState) => {
    dispatch({ type: RESET_PASSWORD_REQUEST })
    const state = getState()
    const { email } = { ...state.form.formData[formPath] }
    await resetPasswordAPI(email, dispatch)
};