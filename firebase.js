import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDcqkflIGIn60hnkClW7JhKkLBBVhhiuAw",
  authDomain: "quickstart-1607022885703.firebaseapp.com",
  projectId: "quickstart-1607022885703",
  storageBucket: "quickstart-1607022885703.appspot.com",
  messagingSenderId: "985223638703",
  appId: "1:985223638703:web:69a5e6195952f38d6aee5a",
  measurementId: "G-0C1GJRR84J"
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