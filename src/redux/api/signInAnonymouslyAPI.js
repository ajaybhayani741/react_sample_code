import firebase from '../../config/firebase'

export const signInAnonymouslyAPI = async () => {
    firebase.auth().signInAnonymously()
        .then(user => {
            // if (user) {
            //     // User is signed in.
            //     const isAnonymous = user.isAnonymous;
            //     console.log('isAnonymous', isAnonymous)
            //     const uid = user.uid;
            //     console.log('uid', uid);
            // } else {
            //     // User is signed out.
            //     // ...
            // }
        }, error => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ...
        })
}
