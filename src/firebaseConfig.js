import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyDoBbv9mk7BjGIRb73R40qyCaShe8KtBEk",

  authDomain: "labialshop-fb03d.firebaseapp.com",

  projectId: "labialshop-fb03d",

  storageBucket: "labialshop-fb03d.appspot.com",

  messagingSenderId: "166792108851",

  appId: "1:166792108851:web:4a1435ea20372cf17cfc46"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)