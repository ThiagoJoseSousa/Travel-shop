// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaE3mVzzPnS8Vbl-kzAlD2ZzVqALYaoL8",
  authDomain: "travel-shop-auth.firebaseapp.com",
  projectId: "travel-shop-auth",
  storageBucket: "travel-shop-auth.appspot.com",
  messagingSenderId: "558510530236",
  appId: "1:558510530236:web:a4fe12358415704faffab9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage= getStorage();

export function signup (email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

//Custom hook
export function useAuth () {
   const [currentUser, setCurrentUser] = useState();
   useEffect(()=>{
    const unsub=onAuthStateChanged(auth, user=>{setCurrentUser(user)});
    return unsub;
}, [])
   return currentUser;
}

export function logout () {
    return signOut(auth);
}

export function login (email,password) {
return signInWithEmailAndPassword(auth,email,password)
}

export async function upload(file, currentUser, setLoading) {
    const fileRef=ref(storage, currentUser.uid + '.png');

setLoading(true);

    const snapshot = await uploadBytes(fileRef,file)
    const photoURL=await getDownloadURL(fileRef);
    updateProfile(currentUser,{photoURL:photoURL});

    setLoading(false);
    alert("Uploaded file!")
}