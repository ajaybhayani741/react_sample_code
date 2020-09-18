import {
    ON_FORM_CHANGE,
    CLEAR_FORM,
    IS_REQUIRED,
    FORM_MESSAGE,
    IS_VALID,
    SET_FORM_VALUES
} from "../constants";

export const initialState = {
    isValid: {},
    formData: {},
    fieldErrors: {},
    fieldRequired: {},
    // errorMessages: {},
    response: null,
    message: '',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {

        case ON_FORM_CHANGE:
            const { formData, fieldErrors } = action.payload;
            return {
                ...state,
                formData,
                fieldErrors,
                // errorMessages,
                message: ''
            };

        case IS_REQUIRED:
            const { fieldRequired, updatedIsValid } = action.payload;
            return {
                ...state,
                fieldRequired,
                isValid: updatedIsValid
            }

        case CLEAR_FORM:
            return {
                ...state,
                ...action.payload
            }

        case FORM_MESSAGE:
            const { message } = action.payload;
            return {
                ...state,
                message
            }

        case SET_FORM_VALUES: 
            const { clonedFormData, clonedFieldErrors } = action.payload;
            return {
                ...state,
                formData: clonedFormData,
                fieldErrors: clonedFieldErrors,
            }

        case IS_VALID:
            const { isValid } = action.payload;
            return {
                ...state,
                isValid
            }
        default:
            return state;
    }
};

export default formReducer;