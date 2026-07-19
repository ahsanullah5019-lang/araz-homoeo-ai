import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// আপনার দেওয়া রিয়েল-টাইম ফায়ারবেস কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCBKMjPmmnOPE_MAPvGnTMTdlG0h4dsVy4",
  authDomain: "araz-homoeo-ai.firebaseapp.com",
  projectId: "araz-homoeo-ai",
  storageBucket: "araz-homoeo-ai.firebasestorage.app",
  messagingSenderId: "391342204115",
  appId: "1:391342204115:web:517605d8d13d1b8cf0e026",
  measurementId: "G-PLNPQGKW05"
};

// ফায়ারবেস অ্যাপ্লিকেশন ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);

// ফায়ারবেস স্টোরেজ ও ট্র্যাকিং সার্ভিস এক্সপোর্ট
export const db = getFirestore(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;