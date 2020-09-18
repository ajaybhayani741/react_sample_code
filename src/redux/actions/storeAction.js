import {
    ADD_STORE_REQUEST,
    ADD_STORE_SUCCESS ,
    ADD_STORE_ERROR,
    EDIT_STORE_REQUEST,
    EDIT_STORE_SUCCESS,
    EDIT_STORE_ERROR,
    DELETE_STORE_REQUEST,
    DELETE_STORE_SUCCESS,
    DELETE_STORE_ERROR,
    UPDATE_STORE_REQUEST,
    UPDATE_STORE_SUCCESS,
    UPDATE_STORE_ERROR,

  } from '../constants/storeConstant';
  import api from "../api/index";

export const addStore = (body) => {
 
    return async (dispatch) => {
        dispatch({type: ADD_STORE_REQUEST});
        try {
            const res = await api('admin/store', 'POST',body, true);
            if(res.data){
                dispatch({
                    type: ADD_STORE_SUCCESS, 
                    userData: res.data
                });
            }else{
                dispatch({type: ADD_STORE_ERROR, errorMsg: res.message});
            }
        } catch (error) {
            dispatch({type: ADD_STORE_ERROR});
        }
    }
};
export const editStore = (body) => {
    return async (dispatch) => {
        dispatch({type: EDIT_STORE_REQUEST});
        try {
            const res = await api(`admin/store/5eeb5735ec7ab92d1af68d44`, 'PUT',body, true);
            if(res.data){
                dispatch({
                    type: EDIT_STORE_SUCCESS, 
                    userData: res.data
                });
            }else{
                dispatch({type: EDIT_STORE_ERROR, errorMsg: res.message});
            }
        } catch (error) {
            dispatch({type: EDIT_STORE_ERROR});
        }
    }
};
