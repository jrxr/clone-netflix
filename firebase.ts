// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//  TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCko460f5glyfpkUDPRzjhAOA14osKMSKg",
  authDomain: "clone-netflix-562ea.firebaseapp.com",
  projectId: "clone-netflix-562ea",
  storageBucket: "clone-netflix-562ea.appspot.com",
  messagingSenderId: "749011002225",
  appId: "1:749011002225:web:d04f81e00e33d1b98e0cd0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }