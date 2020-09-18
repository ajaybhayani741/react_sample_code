import {
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_REQUEST_SUCCESS,
    GET_CART_ITEMS_REQUEST_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_REQUEST_SUCCESS,
    ADD_TO_CART_REQUEST_ERROR,
    DELETE_FROM_CART_REQUEST,
    DELETE_FROM_CART_REQUEST_SUCCESS,
    DELETE_FROM_CART_REQUEST_ERROR
} from "../constants";

const initialState = {
    loading: false,
    isSuccess: false,
    errorMessage: "",
    cartItems: []
}

const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_CART_ITEMS_REQUEST:
            return { ...state, loading: true, isSuccess: false }

        case GET_CART_ITEMS_REQUEST_SUCCESS:
            return { ...state, loading: false, cartItems: action.payload, isSuccess: true }

        case GET_CART_ITEMS_REQUEST_ERROR:
            return {
                ...state,
                isSuccess: false,
                loading: false,
                cartItems: [],
                errorMessage: action.payload || "Something went wrong please try again"
            }

        case ADD_TO_CART_REQUEST:
            return { ...state, loading: true, isSuccess: false }

        case ADD_TO_CART_REQUEST_SUCCESS:            
            return { ...state, loading: false, isSuccess: true }

        case ADD_TO_CART_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                isSuccess: false,
                errorMessage: action.payload || "Something went wrong please try again"
            }

        case DELETE_FROM_CART_REQUEST:
            return { ...state, loading: true, isSuccess: false }

        case DELETE_FROM_CART_REQUEST_SUCCESS:
            const cartItemsClone = state.cartItems.slice();
            const id = action.payload;
            const deletedItem = cartItemsClone.find(item => item.id === id);
            const deletedItemIndex = cartItemsClone.indexOf(deletedItem);
            cartItemsClone.splice(deletedItemIndex, 1);
            console.log('id', id)
            console.log('deletedItem', deletedItem)
            console.log('deletedItemIndex', deletedItemIndex)
            return { ...state, loading: false, cartItems: cartItemsClone, isSuccess: true }

        case DELETE_FROM_CART_REQUEST_ERROR:
            return {
                ...state,
                isSuccess: false,
                loading: false,
                errorMessage: action.payload || "Something went wrong please try again"
            }

        default:
            return { ...state }
    }
}

export default CartReducer;