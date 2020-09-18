import firebase from '../../config/firebase'
import { SIGN_UP_REQUEST_SUCCESS } from '../constants';
import { showToast } from '../../utils/toastService';

export const signupAPI = (email, password, dispatch, history) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log('res', res)
            history.push('/sign-in')
            showToast('successfully sign up', { type: 'success' })
            dispatch({ type: SIGN_UP_REQUEST_SUCCESS })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                // alert('The password is too weak.');
                showToast('The password is too weak.', { type: 'warning' })
            } else {
                // alert(errorMessage);
                showToast(errorMessage, { type: 'error' })
            }
            console.log(error);
        });
};