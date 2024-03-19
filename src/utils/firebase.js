// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVifzTA_i4zfSamM0zCCsmhNRHpXO2ibA",
  authDomain: "netflixclone-6342d.firebaseapp.com",
  projectId: "netflixclone-6342d",
  storageBucket: "netflixclone-6342d.appspot.com",
  messagingSenderId: "72079167702",
  appId: "1:72079167702:web:b29ee45603513d999cf977",
  measurementId: "G-QPX82SB1E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();