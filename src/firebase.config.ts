import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: "AIzaSyAxkg66mbEBTP4wIrsfl27NRZMfOvRkwK8",
    authDomain: "lpsmartbid.firebaseapp.com",
    projectId: "lpsmartbid",
    storageBucket: "lpsmartbid.firebasestorage.app",
    messagingSenderId: "52943907855",
    appId: "1:52943907855:web:1fed377c336e70de7f077a",
    measurementId: "G-M389YE47M2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);