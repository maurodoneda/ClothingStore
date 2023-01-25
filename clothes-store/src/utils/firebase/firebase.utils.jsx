import {initializeApp} from 'firebase/app'
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {getFirestore, doc, getDoc, getDocs, setDoc, collection, writeBatch, query} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvlrnFhhJXRrkYGWqmG-ejsCvlP8LqwZ4",
    authDomain: "clothes-shop-93939.firebaseapp.com",
    projectId: "clothes-shop-93939",
    storageBucket: "clothes-shop-93939.appspot.com",
    messagingSenderId: "658076393226",
    appId: "1:658076393226:web:9971624d436d897eca64f3"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = async () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = async () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addColectionAndDocs = async (collectionKey, objects) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objects.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef,obj);
    })

    await batch.commit();
    console.log('commit done');
}

export const getCollectionAndDocs = async () => {
    const collectionRef = collection(db, 'categories');
    const colletionQuery = query(collectionRef);

    const snapshot = await getDocs(colletionQuery);
    const categoryMap = snapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;
}

export const createUserDoc = async (userAuth, extraInfo = {}) => {

    const userDoc = doc(db, "users", userAuth.uid);
    const userDocSnapshot = await getDoc(userDoc);

    if(!userDocSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDoc, {
                displayName,
                email,
                createdAt,
                ...extraInfo
            })
        }
        catch (ex){
            console.log('error when creating user', ex.message);
        }
    }
    return userDoc;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)
