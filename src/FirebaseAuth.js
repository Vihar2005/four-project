import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyASqnvJAElPILIEQhpM1L2Sl-KJWnCQQrk",
  authDomain: "reactdemoproject-75799.firebaseapp.com",
  databaseURL: "https://reactdemoproject-75799-default-rtdb.firebaseio.com",
  projectId: "reactdemoproject-75799",
  storageBucket: "reactdemoproject-75799.appspot.com",
  messagingSenderId: "521328680836",
  appId: "1:521328680836:web:1da7d3a3910be4046087d1",
  measurementId: "G-1W3P3S6DHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAcvwL7djMBSVzyEx0we-QLO1n7bIsorQc",
//   authDomain: "fir-repeatcrud.firebaseapp.com",
//   projectId: "fir-repeatcrud",
//   storageBucket: "fir-repeatcrud.appspot.com",
//   messagingSenderId: "111035404865",
//   appId: "1:111035404865:web:0d79fb6278ad91f740ecc0",
//   measurementId: "G-S3434MMM92"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export {auth};