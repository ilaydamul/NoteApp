// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import { getReactNativePersistence } from "firebase/auth/react-native";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxqCWTfoKZWoNcqSbZSWDhS2Qz-ne6UBs",
  authDomain: "noteapp-1198c.firebaseapp.com",
  projectId: "noteapp-1198c",
  storageBucket: "noteapp-1198c.appspot.com",
  messagingSenderId: "372845559931",
  appId: "1:372845559931:web:5768a448db4a8be63ce2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth'ı başlat ve AsyncStorage'yi sağla
const auth = getAuth(app);

export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    //Anasayfaya yönlendirme yapılacak.
    //Aynı email ile bir kullanıcı varsa hata vermesi gerek.
    console.log("Başarılı bir şekilde hesap oluştu.");
  } catch (error) {
    console.log(error);
  }
}

export async function signin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    //Anasayfaya yönlendirme yapılacak.
    console.log("Başarılı bir şekilde giriş yapıldı.");
  } catch (error) {
    console.log(error);
  }
}


