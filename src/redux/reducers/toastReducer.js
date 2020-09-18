import { TOAST_STATUS } from '../constants';

export const initialState = {
    message: '',
    type: '',
    status: false
};

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOAST_STATUS:
            const { message, status, type } = action.payload ? action.payload : initialState;
            let msg = message
            if(status && !message){
                msg = "Something went wrong please try again"
            }
            return {
                ...state,
                message: msg,
                status,
                type,
            };
        default:
            return state;
    }
};

export default toastReducer;
