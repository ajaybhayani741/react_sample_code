import {
    ON_FORM_CHANGE,
    IS_REQUIRED,
    CLEAR_FORM,
    IS_VALID,
    SET_FORM_VALUES
} from '../constants'
import validate from '../../utils/validation'
import { values, keys } from '../../utils/regex'
import { initialState } from '../reducers/formReducer'

export const onChangeAction = (name, value, formPath, formAttributesName) => async (dispatch, getState) => {
    const state = getState()
    const clonedFormData = { ...state.form.formData }
    const clonedFieldErrors = { ...state.form.fieldErrors }
    const clonedFieldRequired = { ...state.form.fieldRequired }
    const isValidField = validate(name, value);
    clonedFormData[formPath] = { ...clonedFormData[formPath], [name]: value };
    clonedFieldErrors[formPath] = {
        ...clonedFieldErrors[formPath],
        [name]: clonedFieldRequired[formPath][name] ? !isValidField : false
    }
    const payload = {
        formData: clonedFormData,
        fieldErrors: clonedFieldErrors,
    };
    dispatch({ type: ON_FORM_CHANGE, payload });
    dispatch(isValid(formPath))
};

export const setFormValuesAction = (formPath, object, formAttributes) => async (dispatch, getState) => {
    const state = getState()
    const clonedFormData = { ...state.form.formData }
    const clonedFieldErrors = { ...state.form.fieldErrors }
    const clonedFieldRequired = { ...state.form.fieldRequired }  
  
    values(object).forEach((value, index) => {
        const name = keys(object)[index]
        clonedFormData[formPath] = { ...clonedFormData[formPath], [name]: value };
        const isValidField = validate(name, value);
        clonedFieldErrors[formPath] = {
            ...clonedFieldErrors[formPath],
            [name]: clonedFieldRequired[formPath][name] ? !isValidField : false
        }
    })
    dispatch({ type: SET_FORM_VALUES, payload: { clonedFormData, clonedFieldErrors } })
    // dispatch(isValid())
}

export const requiredAction = (object, formPath) => async (dispatch, getState) => {
    const state = getState()
    const clonedFieldRequired = { ...state.form.fieldRequired[formPath] }
    const fieldRequired = { ...state.form.fieldRequired }
    const isValid = { ...state.form.isValid }
    values(object).forEach(({ isRequired }, index) => {
        const name = keys(object)[index]
        clonedFieldRequired[name] = isRequired || false
    })
    const payload = {
        fieldRequired: {
            ...fieldRequired, [formPath]: clonedFieldRequired
        },
        updatedIsValid: { ...isValid, [formPath]: false }
    }
    dispatch({ type: IS_REQUIRED, payload })
}

export const clearForm = () => async (dispatch) => {
    dispatch({ type: CLEAR_FORM, payload: { ...initialState } })
}

export const isValid = (formPath) => (dispatch, getState) => {
    const state = getState()
    const clonedFieldErrors = { ...state.form.fieldErrors[formPath] }
    const clonedFieldRequired = { ...state.form.fieldRequired[formPath] }
    const isValid = { ...state.form.isValid }
    const filtered = values(clonedFieldRequired).map((fieldRequired, index) => {
        if (fieldRequired) {
            const fieldRequiredName = clonedFieldErrors[keys(clonedFieldRequired)[index]]
            return fieldRequiredName !== undefined ? !fieldRequiredName : false
        } else {
            return true
        }
    });
    const updatedIsValid = !filtered.some(filtered => !filtered)
    dispatch({ type: IS_VALID, payload: { isValid: { ...isValid, [formPath]: updatedIsValid } } })
}
