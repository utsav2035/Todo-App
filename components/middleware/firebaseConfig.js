// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG1KiEFpypiiFewHZhl1b8aTaPLkmNj_Y",
  authDomain: "todo-app-d7a34.firebaseapp.com",
  projectId: "todo-app-d7a34",
  storageBucket: "todo-app-d7a34.appspot.com",
  messagingSenderId: "954171437501",
  appId: "1:954171437501:web:ff0f456c30b14855d862d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);