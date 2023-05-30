// import firebase from 'firebase'
import {getAuth} from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {initializeApp} from 'firebase';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBN9TjZulfJPyfOay7J5u0g8EkRqDrVPFs",
    authDomain: "supersonic-aa9d6.firebaseapp.com",
    projectId: "supersonic-aa9d6",
    storageBucket: "supersonic-aa9d6.appspot.com",
    messagingSenderId: "552610139372",
    appId: "1:552610139372:web:11a979448decbe2deb29c9"
  };


// const firebase = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const fs = firebase.firestore();
// const storage = firebase.storage();
const app = initializeApp(firebaseConfig);

//  export default firebaseConfig;
 
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);