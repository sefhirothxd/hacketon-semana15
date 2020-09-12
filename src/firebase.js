import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwCwPxdioRN8QC5drmpstPIkn0KuHeymE",
  authDomain: "vue-crud-f8ab9.firebaseapp.com",
  databaseURL: "https://vue-crud-f8ab9.firebaseio.com",
  projectId: "vue-crud-f8ab9",
  storageBucket: "vue-crud-f8ab9.appspot.com",
  messagingSenderId: "210392947280",
  appId: "1:210392947280:web:28ab6477dc3c2d3cc4cf55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
