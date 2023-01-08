import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvlrnFhhJXRrkYGWqmG-ejsCvlP8LqwZ4",
    authDomain: "clothes-shop-93939.firebaseapp.com",
    projectId: "clothes-shop-93939",
    storageBucket: "clothes-shop-93939.appspot.com",
    messagingSenderId: "658076393226",
    appId: "1:658076393226:web:9971624d436d897eca64f3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();
export const singInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDoc = async (userAuth) => {

    const userDoc = doc(db, "users", userAuth.uid);

    console.log(userDoc);

    const userDocSnapshot = await getDoc(userDoc);
    console.log(userDocSnapshot);

    if(!userDocSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDoc, {
                displayName,
                email,
                createdAt
            })
        }
        catch (ex){
            console.log('error when creating user', ex.message);
        }
    }
    return userDoc;
}
