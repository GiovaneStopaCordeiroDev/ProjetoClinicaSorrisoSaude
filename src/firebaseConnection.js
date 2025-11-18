import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1ut0Z1PvNjo_dkke1JoEqSMA78-V5GiU",
  authDomain: "clinica-sorrisosaude.firebaseapp.com",
  projectId: "clinica-sorrisosaude",
  storageBucket: "clinica-sorrisosaude.appspot.com",
  messagingSenderId: "318659133676",
  appId: "1:318659133676:web:1a9e924a79fef3164ae5c9",
  measurementId: "G-8DV8SV7XCK"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {db}