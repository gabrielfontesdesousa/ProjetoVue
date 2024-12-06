import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfLCd7teWi_dXsLoIOeRTVcYK53XN3-YI",
  authDomain: "vertus-189d9.firebaseapp.com",
  projectId: "vertus-189d9",
  storageBucket: "vertus-189d9.firebasestorage.app",
  messagingSenderId: "204465706088",
  appId: "1:204465706088:web:e41aced6c418b9782e57dd",
  measurementId: "G-SGZH97ZE6S"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Auth = getAuth(app);

export { auth } 
