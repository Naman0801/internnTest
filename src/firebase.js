import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDiLIyhVD9IkMRQm52pxwnd1Zg_Y8VYOEE",
    authDomain: "interntest-60761.firebaseapp.com",
    projectId: "interntest-60761",
    storageBucket: "interntest-60761.appspot.com",
    messagingSenderId: "804936444680",
    appId: "1:804936444680:web:ae0d8dee16c62a0981dabd"
};

firebase.initializeApp(firebaseConfig);

export default firebase;