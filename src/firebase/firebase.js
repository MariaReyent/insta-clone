import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiD3abQStvrqM_tYoNVEHd67V5TyFf7-k",
  authDomain: "insta-clone-5af8d.firebaseapp.com",
  projectId: "insta-clone-5af8d",
  storageBucket: "insta-clone-5af8d.appspot.com",
  messagingSenderId: "697903586254",
  appId: "1:697903586254:web:8e54abc78740940248299f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
