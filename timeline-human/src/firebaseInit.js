// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDlzLjVNXhAfAOlgCEnMHqGTXqKWxRMLc",
  authDomain: "timeline-kings.firebaseapp.com",
  databaseURL: "https://timeline-kings-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timeline-kings",
  storageBucket: "timeline-kings.appspot.com",
  messagingSenderId: "761275102211",
  appId: "1:761275102211:web:12a1a892b0ad212482ca36",
  measurementId: "G-9QH71LJ8Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics
