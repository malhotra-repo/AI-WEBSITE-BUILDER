// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCURsa1_L1n5vzqul62cTvv9K4RdJc-Ljg",
  authDomain: "new-project-85aa0.firebaseapp.com",
  projectId: "new-project-85aa0",
  storageBucket: "new-project-85aa0.firebasestorage.app",
  messagingSenderId: "441994287078",
  appId: "1:441994287078:web:b6ca1c1ad549636f856827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}