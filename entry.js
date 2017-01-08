// React
import React from 'react';
import ReactDOM from 'react-dom';

// Firebase
import * as firebase from 'firebase';

// Components
import Splash from './components/splash';

const config = {
  apiKey: "AIzaSyAUfrVpqX69J8ciGkU_0a5VYRda3FX4t_E",
  authDomain: "secretsanta-7ae82.firebaseapp.com",
  databaseURL: "https://secretsanta-7ae82.firebaseio.com",
  storageBucket: "secretsanta-7ae82.appspot.com",
  messagingSenderId: "482910917117"
};

firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Splash />, root)
});
