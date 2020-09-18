import { CHECK_OUT_REQUEST, CHECK_OUT_REQUEST_SUCCESS, CHECK_OUT_REQUEST_ERROR } from "../constants";

const initialState = {

}


export default function (state = initialState, action) {
    switch (action.type) {
        case CHECK_OUT_REQUEST:
            return {
                ...state,

            };
        case CHECK_OUT_REQUEST_SUCCESS:
            return {
                ...state,

            };
        case CHECK_OUT_REQUEST_ERROR:
            return {
                ...state,

            };

        default:
            return state;
    }
}