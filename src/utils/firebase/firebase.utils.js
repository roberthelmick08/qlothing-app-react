import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore, doc, getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7fhC4ONaVX_D9AW4Kt9p44rrKYI6VOMM",
  authDomain: "qlothing-db.firebaseapp.com",
  projectId: "qlothing-db",
  storageBucket: "qlothing-db.appspot.com",
  messagingSenderId: "152924320006",
  appId: "1:152924320006:web:176ef8cc9542d99e84ae87"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => { signInWithPopup(auth, provider) };

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
}