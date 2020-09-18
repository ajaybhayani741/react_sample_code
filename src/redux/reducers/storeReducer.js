import {
    ADD_STORE_REQUEST,
    ADD_STORE_SUCCESS ,
    ADD_STORE_ERROR,
    EDIT_STORE_REQUEST,
    EDIT_STORE_SUCCESS ,
    EDIT_STORE_ERROR,
    UPDATE_STORE_REQUEST,
    UPDATE_STORE_SUCCESS,
    UPDATE_STORE_ERROR,

  } from '../constants/storeConstant';

const initialState = {
    status:'',
    loading: false,
    isSuccess: false,
    errorMessage: "",
    storeDataList: [],
    selectStoreData:{},
    addedStoreData:{},
}

const store = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STORE_REQUEST:
            return {
                ...state, 
                loading: true,
                status:'requested',
            }
        case ADD_STORE_SUCCESS: {
            const { userData } = action.payload
            return {
                ...state, 
                addedStoreData: userData, 
                loading: false, 
                isSuccess: true,
                status:'successful',
            }
        }
        case ADD_STORE_ERROR:
            return {
                ...state, 
                loading: false, 
                errorMessage:"Something went wrong please try again",
                status:'fail',
            }
            case EDIT_STORE_REQUEST:
                return {
                    ...state, 
                    loading: true,
                    status:'requested',
                }
            case EDIT_STORE_SUCCESS: {
                const { userData } = action.payload
                return {
                    ...state, 
                    userDetails: userData, 
                    loading: false, 
                    isSuccess: true,
                    status:'successful',
                }
            }
            case EDIT_STORE_ERROR:
                return {
                    ...state, 
                    loading: false, 
                  //  errorMessage: errorMsg || "Something went wrong please try again",
                    status:'fail',
                }
                case UPDATE_STORE_REQUEST:
                    return {
                        ...state, 
                        loading: true,
                        status:'requested',
                    }
                case UPDATE_STORE_SUCCESS: {
                    const { userData } = action.payload
                    return {
                        ...state, 
                        userDetails: userData, 
                        loading: false, 
                        isSuccess: true,
                        status:'successful',
                    }
                }
                case UPDATE_STORE_ERROR:
                    return {
                        ...state, 
                        loading: false, 
                      //  errorMessage: errorMsg || "Something went wrong please try again",
                        status:'fail',
                    }        
        default:
            return state
    }
}
export default category
