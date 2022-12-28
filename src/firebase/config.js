import firebase from "firebase";
import  'firebase/auth'
import 'firebase/firebase'
import   "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrwuaULHM1HCX2XPkOazub7i5aLRGDS2c",
    authDomain: "olx-clone-bc1d2.firebaseapp.com",
    projectId: "olx-clone-bc1d2",
    storageBucket: "olx-clone-bc1d2.appspot.com",
    messagingSenderId: "591290098530",
    appId: "1:591290098530:web:5824ec15cad16077de423b",
    measurementId: "G-BN02PS4LZB"
  };


 export default  firebase.initializeApp(firebaseConfig)