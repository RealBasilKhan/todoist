import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDcw-3K1YN2pzuaovfGvWSm_wRXK7ebICY",
    authDomain: "todoist-tut-3a063.firebaseapp.com",
    databaseURL: "https://todoist-tut-3a063-default-rtdb.firebaseio.com",
    projectId: "todoist-tut-3a063",
    storageBucket: "todoist-tut-3a063.appspot.com",
    messagingSenderId: "566423485838",
    appId: "1:566423485838:web:9e5684df75d5ae8e4838df",
    measurementId: "G-W00CZV973B"
});

export { firebaseConfig as firebase };