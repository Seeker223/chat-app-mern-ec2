// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtOFQ_Bx1a1anB6lYzy4GxeCfyAxQ6afE",
  authDomain: "chatapp-36373.firebaseapp.com",
  projectId: "chatapp-36373",
  storageBucket: "chatapp-36373.appspot.com",
  messagingSenderId: "499179779890",
  appId: "1:499179779890:web:3d516a8c3fd1df8991092b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFireStore(app);