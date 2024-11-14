import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUSLBV3Ga_OtphabJqLBCXDDMhQPaehJw",
    authDomain: "portfolio-20a68.firebaseapp.com",
    projectId: "portfolio-20a68",
    storageBucket: "portfolio-20a68.firebasestorage.app",
    messagingSenderId: "221079424746",
    appId: "1:221079424746:web:1d1095a46cb42e5ef25193"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };