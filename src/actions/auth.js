import {
    firebase,
    googleAuthProvider,
    twitterAuthProvider,
    facebookAuthProvider,
    githubAuthProvider,
} from '../firebase/firebase';

export const login = uid => ({
    type: 'LOGIN',
    uid,
});

export const startLoginWithGoogle = () => {
    // We return a function to be invoked only when the button is pressed.
    // Otherwise, I will be called when the action creator is called
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const startLoginWithTwitter = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider);
    };
};

export const startLoginWithGithub = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
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
