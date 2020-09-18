import firebase from '../../config/firebase'
import { SIGN_IN_REQUEST_SUCCESS, TOKEN } from '../constants'
import { setLoggedUser } from '../../utils/authentication'
import { showToast } from '../../utils/toastService'

export const currentUserAPI = async (dispatch, history) => {
    dispatch({ type: SIGN_IN_REQUEST_SUCCESS })
    firebase.auth().currentUser.getIdToken()
        .then(async token => {
            dispatch({ type: TOKEN, payload: { token, isLoggedIn: true } })
            setLoggedUser(token)
            history.push('/')
            showToast('successfully logged in', { type: 'success' })
        })
}