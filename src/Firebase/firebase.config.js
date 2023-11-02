// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABWz5vnIZIsTud9IeA2MWmIstaKPPhAlQ",
  authDomain: "ni-portfolio.firebaseapp.com",
  projectId: "ni-portfolio",
  storageBucket: "ni-portfolio.appspot.com",
  messagingSenderId: "439340134092",
  appId: "1:439340134092:web:7a3098fe54e4ac32f81c69",
  measurementId: "G-HMM4Q5NWLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export default app;