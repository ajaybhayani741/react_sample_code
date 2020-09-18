import api from "../../index";
import { updatePersonalInfoParams } from "../../urls";
import { UPDATE_USER_INFO_REQUEST_ERROR, UPDATE_USER_INFO_REQUEST_SUCCESS, GET_USER_INFO_REQUEST } from "../../../constants";
import { showToast } from "../../../../utils/toastService";

export const updatePersonalInfo = async (body,id, dispatch) => {
    console.log('update personal info body: ', body);
    const { method, header } = updatePersonalInfoParams;
    const url = `${updatePersonalInfoParams.url}/${id}`;
    api(url, method, body, header)
        .then(res => {
            console.log('res', res)
            if (res.data) {
                dispatch({ type: UPDATE_USER_INFO_REQUEST_SUCCESS })
                dispatch({ type: GET_USER_INFO_REQUEST })
            } else {
                dispatch({ type: UPDATE_USER_INFO_REQUEST_ERROR, payload: res.message })
                showToast(res.message, { type: 'error' })
            }
        })
        .catch((error) => {
            // var errorCode = error.code;
            console.log(error);
            var errorMessage = error.message ? error.message : undefined;
            showToast(errorMessage, { type: 'error' })
            dispatch({ type: UPDATE_USER_INFO_REQUEST_ERROR, payload: errorMessage })
        });
};