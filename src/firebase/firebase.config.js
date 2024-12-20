// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.VITE_apiKey)
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
}

// const firebaseConfig = {
//   apiKey: "AIzaSyCUzMvcRPCVSlXZxaQRNHzvNOnc-J8FuHQ",
//   authDomain: "solosphere-template-1b0ef.firebaseapp.com",
//   projectId: "solosphere-template-1b0ef",
//   storageBucket: "solosphere-template-1b0ef.firebasestorage.app",
//   messagingSenderId: "387786354376",
//   appId: "1:387786354376:web:1e8834b94ffd9a58f6bffd"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
