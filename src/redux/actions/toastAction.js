import { TOAST_STATUS } from '../constants';
  
export const toastStatusChange = (payload) => async (dispatch) => {
    dispatch({type: TOAST_STATUS, payload});
};
  