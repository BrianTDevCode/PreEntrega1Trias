// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


// const firebaseConfig = {
//   apiKey: "AIzaSyAcAa6XCQEVtKUd2LRk-GBm4-0D0HjEjbM",
//   authDomain: "fb-computer-shop-react.firebaseapp.com",
//   projectId: "fb-computer-shop-react",
//   storageBucket: "fb-computer-shop-react.appspot.com",
//   messagingSenderId: "269088756756",
//   appId: "1:269088756756:web:0619ac9f57141c1e4c0301"
// };



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);