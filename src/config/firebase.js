import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCafhtEAdCBpOJBT1I-xUxKNn1XgsdhAt4",
  authDomain: "chat-app-dca71.firebaseapp.com",
  projectId: "chat-app-dca71",
  storageBucket: "chat-app-dca71.appspot.com",
  messagingSenderId: "963394462350",
  appId: "1:963394462350:web:47c990cd8f822de025dfdf",
  measurementId: "G-SH58E6VR9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//sign up logic
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, I am Using Chat App",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//login logic
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//logout logic
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

export { signup, login, logout, auth, db };
