import { GET_CART_ITEMS_REQUEST, ADD_TO_CART_REQUEST, DELETE_FROM_CART_REQUEST, SHOW_LOADER } from "../constants";
import { getCartItems } from "../api/cart/getCartItems";
import { addToCart } from "../api/cart/addToCart";
import { deleteFromCart } from "../api/cart/deleteFromCart";
import { changeLoader } from "./loaderAction";

export const getCartItemsAction = () => async (dispatch) => {
    dispatch({type: SHOW_LOADER })
    dispatch({ type: GET_CART_ITEMS_REQUEST })
    await getCartItems(dispatch)
};

export const addToCartAction = (data, i=null, history) => async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST })
    dispatch(changeLoader(true))
    await addToCart(data,i, dispatch, history.location.pathname)
};

export const deleteFromCartAction = (data) => async (dispatch) => {
    dispatch({ type: SHOW_LOADER })
    dispatch({ type: DELETE_FROM_CART_REQUEST })
    await deleteFromCart(data, dispatch)
};