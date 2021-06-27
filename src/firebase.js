import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCPjCr84bU2iui8Hy7cDlI3l8V5vAvjMOM",
    authDomain: "artur-92975.firebaseapp.com",
    projectId: "artur-92975",
    storageBucket: "artur-92975.appspot.com",
    messagingSenderId: "62515985022",
    appId: "1:62515985022:web:26f31bc6bda89bfca3b62f"
  }).auth();