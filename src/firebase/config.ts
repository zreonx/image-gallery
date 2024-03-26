import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpoj9FAU8ge5iTjNC5FWZAL87dggpmPTg",
  authDomain: "img-gallery-9d9f9.firebaseapp.com",
  projectId: "img-gallery-9d9f9",
  storageBucket: "img-gallery-9d9f9.appspot.com",
  messagingSenderId: "684166957587",
  appId: "1:684166957587:web:8b3a4ba68bd4f6898e8de6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
