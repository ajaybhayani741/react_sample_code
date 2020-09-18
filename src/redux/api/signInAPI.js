import firebase from '../../config/firebase'
import { SIGN_IN_REQUEST_ERROR } from '../constants';
import { currentUserAPI } from './currentUserAPI';
import { showToast } from '../../utils/toastService';
// import { isGuest, getGuestCredential } from '../../utils/authentication';


export const signInAPI = async (email, password, dispatch, history) => {
    // if (isGuest()) {
    //     const credential = await getGuestCredential(email, password);
    //     console.log('cred', credential)
    //     firebase.auth().currentUser.linkWithCredential(credential)
    //         .then(function (userCred) {
    //             var user = userCred.user;
    //             console.log("Anonymous account successfully upgraded", user);
    //             // currentUserAPI(dispatch, history)
    //         }).catch(function (error) {
    //             console.log("Error upgrading anonymous account", error);
    //         });

    // } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => currentUserAPI(dispatch, history),
                error => {
                    if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                        showToast(error.message, { type: 'error' })
                        dispatch({ type: SIGN_IN_REQUEST_ERROR, error: error.message })
                    }
                }
                , error => { console.error(error) }
            )
    // }
}
