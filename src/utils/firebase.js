// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyX2sv-ZGcYSim1HFCM9I1oz3Or07B4hk",
  authDomain: "smart-stream-5cd67.firebaseapp.com",
  projectId: "smart-stream-5cd67",
  storageBucket: "smart-stream-5cd67.appspot.com",
  messagingSenderId: "211564843768",
  appId: "1:211564843768:web:7208d5136cad7dda90e10d",
  measurementId: "G-R9K4G4FWHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
