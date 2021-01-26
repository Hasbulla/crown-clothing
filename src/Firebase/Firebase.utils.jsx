import firebase from "firebase/app";
import "firebase/firestore";
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

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const creaedAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                creaedAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error Creating User!!!", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objetsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objetsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = ( collections ) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce(( accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {} );
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;