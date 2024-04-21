import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.querySelector('.signUpForm');
const signInForm = document.querySelector('.signInForm');


signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


const firebaseConfig = {
    apiKey: "AIzaSyA5EbgfvS751cQIsa3mW2qcek4bqLavyQM",
    authDomain: "login-with-firebase-86ecd.firebaseapp.com",
    projectId: "login-with-firebase-86ecd",
    storageBucket: "login-with-firebase-86ecd.appspot.com",
    messagingSenderId: "673261771286",
    appId: "1:673261771286:web:36d5fcca4ede08e0163337"
};    

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  signUpForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value
    const name = document.getElementById('name').value
    const aadhar = document.getElementById('Aadhar').value
    const contact = document.getElementById('contact').value

    if (name == "") return;

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Declare user variable
        const user = userCredential.user;
  

        set(ref(database, 'users/' + user.uid), {
          email,
          name, 
          password,
          aadhar,
          contact
        });


        
      })
  })

  signInForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Declare user variable
        const user = userCredential.user;
        console.log(user);
      })
  })


  // if (validate_email(email) == false || validate_password(password) == false) {
  //   alert('Email or Password is Outta Line!!')
  //   return
  //   // Don't continue running the code
  // }
  // if (validate_Aadhar(Aadhar) == null || validate_Aadhar(Aadhar) <= 8) {
  //   alert('Invalid Aadhar Number!!')
  //   return
  // }

  console.log("ol");