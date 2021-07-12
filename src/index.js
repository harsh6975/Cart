import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore' ;

const firebaseConfig = {
    apiKey: "AIzaSyABuwXNOZ9-GVNKjRuWcqCwyKNHjHRYJ_Y",
    authDomain: "cart-fa55a.firebaseapp.com",
    projectId: "cart-fa55a",
    storageBucket: "cart-fa55a.appspot.com",
    messagingSenderId: "508858056749",
    appId: "1:508858056749:web:f6a192796819fd345ff8a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
