import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwq76d0_sL8yaAuz_xUvbyL8HeemoR3QI",
  authDomain: "hp-newsletter-5bf2d.firebaseapp.com",
  projectId: "hp-newsletter-5bf2d",
  storageBucket: "hp-newsletter-5bf2d.firebasestorage.app",
  messagingSenderId: "920863976191",
  appId: "1:920863976191:web:16b43c11232387079f3aca",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
