import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA9eF6rzFyA2KDXgPN1Xxn6x5PTGLKL78w",
    authDomain: "agroetech-20d35.firebaseapp.com",
    projectId: "agroetech-20d35",
    storageBucket: "agroetech-20d35.appspot.com",
    messagingSenderId: "391204830398",
    appId: "1:391204830398:web:45016d0dd2b2593f2af2ef"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default { app, auth, db };