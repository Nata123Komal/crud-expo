// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMssAVTOA-_pV_XAWENGhmYwFnRGgNcYw",
  authDomain: "brandbooksql.firebaseapp.com",
  databaseURL: "https://brandbooksql-default-rtdb.firebaseio.com",
  projectId: "brandbooksql",
  storageBucket: "brandbooksql.appspot.com",
  messagingSenderId: "120098766406",
  appId: "1:120098766406:web:b64c0aacedcd2cd5ea1447",
  measurementId: "G-FZ9H2G6271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);