import { ADD_USER_INFO_REQUEST, GET_USER_INFO_REQUEST, UPDATE_USER_INFO_REQUEST } from "../constants";
import { getPersonalInfo } from "../api/user/personal-info/getPersonalInfo";
import { addPersonalInfo } from "../api/user/personal-info/addPersonalInfo";
import { updatePersonalInfo } from "../api/user/personal-info/updatePersonalInfo";
import { changeLoader } from "./loaderAction";

export const getPersonalInfoAction = () => async (dispatch) => {
    dispatch(changeLoader(true))
    dispatch({ type: GET_USER_INFO_REQUEST })
    await getPersonalInfo(dispatch)
};

export const addPersonalInfoAction = (data) => async (dispatch) => {
    dispatch({ type: ADD_USER_INFO_REQUEST })
    await addPersonalInfo(data, dispatch)
};

export const updatePersonalInfoAction = (data, id) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_INFO_REQUEST })
    await updatePersonalInfo(data,id,dispatch)
};