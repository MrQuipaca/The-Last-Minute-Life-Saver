// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxAjZre8RQa6BhZU5DRd0LXENanbIjPds",
  authDomain: "lifesaverapp-a960a.firebaseapp.com",
  projectId: "lifesaverapp-a960a",
  storageBucket: "lifesaverapp-a960a.firebasestorage.app",
  messagingSenderId: "104726548362",
  appId: "1:104726548362:web:39e8531f77def77836c273",
  measurementId: "G-LQQ31DEZ78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);