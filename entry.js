// React
import React from 'react';
import ReactDOM from 'react-dom';

// Firebase
import * as firebase from 'firebase';
import { configFirebase } from './config';

// Components
import Splash from './components/splash';

firebase.initializeApp(configFirebase);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Splash />, root)
});
