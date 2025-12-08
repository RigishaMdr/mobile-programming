// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/getDatabase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEC_FSKEDYmMmTfDWoqVr5dxKVPlJdDKM",
  authDomain: "public-bus-navigation.firebaseapp.com",
  projectId: "public-bus-navigation",
  storageBucket: "public-bus-navigation.firebasestorage.app",
  messagingSenderId: "296270159216",
  appId: "1:296270159216:web:ffc9951fb3911aed6fc3b5",
  measurementId: "G-GYGR8BETWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
console.log(db)

//GET
function userDB(userid, firstName, lastName){

  set (ref(db,'/users/'+ userid),{
    firstName: firstName,
    lastName: lastName, 
    });
  }
writeuserDB(101,"Regisha ", "Manandhar")
function userDB(
  userid,
  firstName,
  lastName,
  email,
  phone,
  address,
  gender,
  priority,
  age,
  noofcertificate
) {
  set(ref(db, "/users/" + userid), {
    firstName: firstName,
    lastName: lastName,
    Email: email,
    phone: phone,
    Address: address,
    Gender: gender,
    Age: age,
    Priority: priority,
    NoOfCertification: noofcertificate,
  });
}
userDB(
  101,
  "Regisha",
  "Manandhar",
  "rir@gmail.com",
  9812345678,
  "KTM",
  "Female",
  22,
  "AI/ML",
  "3"
);