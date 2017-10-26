import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = uid => ({
    type: 'LOGIN',
    uid,
});

export const startLogin = () => {
    // We return a function to be invoked only when the button is pressed.
    // Otherwise, I will be called when the action creator is called
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
