import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import Navbar from './Components/Navbar/Navbar';
import SignupModal from './Components/Modals/SignupModal';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const App = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });

    return (
        <>
            <Navbar />
            <div>
                NNNNNN
            </div>

            {/* Modals */}
            <SignupModal
                firebase={firebase}
            />
        </>
    );
}

export default App;
