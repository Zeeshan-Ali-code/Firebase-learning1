// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc1SXN7Qv32AMJTF50vWn6x_80Tb8j1Hw",
  authDomain: "e-commerce-44751.firebaseapp.com",
  projectId: "e-commerce-44751",
  storageBucket: "e-commerce-44751.appspot.com",
  messagingSenderId: "33661100436",
  appId: "1:33661100436:web:3aefa0de50a88767e4ef81",
  measurementId: "G-RGF9H9Y57N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// console.log("auth=>", auth);

const signup_email = document.getElementById('signup_email');
const signup_password = document.getElementById('signup_password');
const signup_btn = document.getElementById('signup_btn');

signup_btn.addEventListener('click', createUserAccount);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is loged in==>");
    
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    console.log("user is not loged in==>");
    // User is signed out
    // ...
  }

});


function createUserAccount (){
  // console.log("email==>", signup_email.value);
  // console.log("password==>", signup_password.value);
  createUserWithEmailAndPassword(
    auth,
    signup_email.value, 
    signup_password.value
  )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user==>", user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });


}   