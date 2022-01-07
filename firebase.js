import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBl4woGk5Q79_693bM3EMnJkhH_7XGI0B4",
  authDomain: "vouch-challenge-58822.firebaseapp.com",
  projectId: "vouch-challenge-58822",
  storageBucket: "vouch-challenge-58822.appspot.com",
  messagingSenderId: "446127467163",
  appId: "1:446127467163:web:0d05c99a849d7020a7343e"
};

try {
    initializeApp(config)
} catch (error) {
    console.log(error);    
}

const app = getApp();
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db }