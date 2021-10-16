import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBRFBNRiqeAt1hZumtwC_KOtdoI4aREAEo",
    authDomain: "my-website-2021-b21cf.firebaseapp.com",
    projectId: "my-website-2021-b21cf",
    storageBucket: "my-website-2021-b21cf.appspot.com",
    messagingSenderId: "588182441605",
    appId: "1:588182441605:web:376c11ba8dba227f1ae3ec",
    measurementId: "G-382Y5T4QTS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };