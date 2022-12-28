// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeCQxYTRyyyq8cGTuvyHJ-gxU2b0yGfXQ",
  authDomain: "uber-next-clone-live-5a147.firebaseapp.com",
  projectId: "uber-next-clone-live-5a147",
  storageBucket: "uber-next-clone-live-5a147.appspot.com",
  messagingSenderId: "50340113845",
  appId: "1:50340113845:web:2671ba6755008850a03dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
