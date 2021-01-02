import firebase from "firebase/app";
import "firebase/firestone";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDvjQnIPcHjY0SkMeO1hTXkAqgZGe8S_HM",
    authDomain: "crown-clothing-407a3.firebaseapp.com",
    projectId: "crown-clothing-407a3",
    storageBucket: "crown-clothing-407a3.appspot.com",
    messagingSenderId: "621112090609",
    appId: "1:621112090609:web:78d2de074d1ae9ac4dae50",
    measurementId: "G-XMBV0S8PLN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomProviders({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;