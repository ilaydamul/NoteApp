import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getReactNativePersistence, onAuthStateChanged } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAxqCWTfoKZWoNcqSbZSWDhS2Qz-ne6UBs",
  authDomain: "noteapp-1198c.firebaseapp.com",
  projectId: "noteapp-1198c",
  storageBucket: "noteapp-1198c.appspot.com",
  messagingSenderId: "372845559931",
  appId: "1:372845559931:web:5768a448db4a8be63ce2de"
};

const app = initializeApp(firebaseConfig);
var auth, isLogin = false;

if (!getAuth().app) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} else {
  auth = getAuth();
}

const loginStatusPromise=new Promise((resolve)=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Oturum açılmış: " + user.email);
      isLogin = true;
    }
    else {
      console.log("Oturum açılmamış.");
      isLogin = false;
    }

    console.log("Firebase: "+isLogin);
    resolve(isLogin);
  })
  
})

export async function checkLoginStatus() {
  // console.log(isLogin);
  return await loginStatusPromise;
}

export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user2 = userCredential.user;

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
    const user2 = userCredential.user;
    //Anasayfaya yönlendirme yapılacak.
    // loginStatusPromise();
    console.log("Başarılı bir şekilde giriş yapıldı.");
  } catch (error) {
    console.log(error);
  }
}

