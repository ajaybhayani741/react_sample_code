import firebase from '../config/firebase'

export const isLoggedIn = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData || false
};

export const isGuest = () => {
    const guestData = JSON.parse(localStorage.getItem('isGuest'));
    return guestData || false
};

export const setLoggedUser = (data) => {
    const userData = JSON.stringify(data);
    localStorage.setItem('userData', userData);
    removeGuestUser();
}

export const setGuestUser = (data) => {
    const token = JSON.stringify(data);
    localStorage.setItem('isGuest', true);
    localStorage.setItem('guestToken', token);
}

export const removeGuestUser = () => {
    localStorage.removeItem('isGuest');
    localStorage.removeItem('guestToken');
}

export const loggedOutUser = async () => {
    localStorage.removeItem('userData');
    // await signInAnonymouslyAPI()
    // setGuestUser(getGuestToken)
}

export const refreshToken = new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
        user.getIdToken().then((idToken) => {
            resolve(idToken)
        });
    });
});

export const getGuestToken = new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
        user.getIdToken().then((idToken) => {
            setGuestUser(idToken)
            resolve(idToken)
        });
    });
});

export const getGuestCredential = async (email, password) => {
    return firebase.auth.EmailAuthProvider.credential(email, password)
};