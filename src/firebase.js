import firebaseConfig from '../config';
import firebase from 'firebase/app';




const firebaseConfig = {
    apiKey: "AIzaSyCYCAMk22QlSSIcEFEA0xrXoY_1Rao06hU",
    authDomain: "pregnancy-update.firebaseapp.com",
    projectId: "pregnancy-update",
    storageBucket: "pregnancy-update.appspot.com",
    messagingSenderId: "1000017063663",
    appId: "1:1000017063663:web:35dcf1f34666080843f51a",
    measurementId: "G-S3SD6SK6FP"
  };


  firebase.initializeApp(firebaseConfig); 
  export const auth = firebase.auth();