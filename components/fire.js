import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDG1VYyrKFQbtQJWRNp5prFc8XoQSHp1g0",
    authDomain: "tenzies-3f843.firebaseapp.com",
    databaseURL: "https://tenzies-3f843-default-rtdb.firebaseio.com",
    projectId: "tenzies-3f843",
    storageBucket: "tenzies-3f843.appspot.com",
    messagingSenderId: "89297279281",
    appId: "1:89297279281:web:7db87bdbf4f562d34fb810",
    measurementId: "G-NT2LK1Y1CP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
