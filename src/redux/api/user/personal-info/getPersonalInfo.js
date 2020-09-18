import api from "../../index";
import { getPersonalInfoParams } from "../../urls";
import { GET_USER_INFO_REQUEST_ERROR, GET_USER_INFO_REQUEST_SUCCESS } from "../../../constants";
import { showToast } from "../../../../utils/toastService";
import { changeLoader } from "../../../actions/loaderAction";
// import { setFormValuesAction } from "../../../actions/formAction";

export const getPersonalInfo = async (dispatch) => {
    // const state = getState()
    const { url, method, header } = getPersonalInfoParams
    api(url, method, null, header)
        .then(res => {
            console.log('res', res)
            if (res.data) {
                dispatch({ type: GET_USER_INFO_REQUEST_SUCCESS, payload: res.data })
                // dispatch(setFormValuesAction('personal-info', state.user.userInfo.personalInfo))
            } else {
                dispatch({ type: GET_USER_INFO_REQUEST_ERROR, payload: res.message })
                showToast(res.message, { type: 'error' })
            }
            dispatch(changeLoader(false))
        })
        .catch((error) => {
            // var errorCode = error.code;
            dispatch(changeLoader(false))
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: GET_USER_INFO_REQUEST_ERROR, payload: errorMessage })
            
        });
};