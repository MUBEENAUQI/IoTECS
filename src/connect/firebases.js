import firebase from "firebase/compat/app";
import "firebase/compat/database";



const firebaseConfig = {
    apiKey: "AIzaSyDw72xsk46e4juzBpiVe06eRjRXhvbzeyk",
    authDomain: "iotecs-e25f1.firebaseapp.com",
    databaseURL: "https://iotecs-e25f1-default-rtdb.firebaseio.com",
    projectId: "iotecs-e25f1",
    storageBucket: "iotecs-e25f1.appspot.com",
    messagingSenderId: "1095739551407",
    appId: "1:1095739551407:web:3b0483a59866e977fbee5a",
    measurementId: "G-G81N2GBND6"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database(); //import database and do named export

//initiliase the app and pass in the site data
export default app;
