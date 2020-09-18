import { combineReducers } from 'redux';

import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import searchReducer from './searchReducer';
import formReducer from './formReducer';
import toastReducer from './toastReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import featuredNumberReducer from './featuredNumberReducer'
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import resetPasswordReducer from './resetPasswordReducer';
import favoriteNumberReducer from './favoriteNumberReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    search: searchReducer,
    form: formReducer,
    toast: toastReducer,
    auth: authReducer,
    featuredNumber: featuredNumberReducer,
    cart: cartReducer,
    loader: loaderReducer,
    user: userReducer,
    resetPassword: resetPasswordReducer,
    favoriteNumber: favoriteNumberReducer,
    category: categoryReducer
});
