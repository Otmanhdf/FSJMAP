// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {   getDoc,doc } from "firebase/firestore";



const firebaseConfig = {
 "put your configuration firebase"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app)
export default auth;
export {db,doc,getDoc}
