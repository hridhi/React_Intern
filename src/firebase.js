import firebase from "firebase";
const config ={
    apiKey: "AIzaSyCt9StPJmFve20CAAD_zfoc92uux31ahFA",
    authDomain: "my-app-a2024.firebaseapp.com",
    projectId: "my-app-a2024",
    storageBucket: "my-app-a2024.appspot.com",
    messagingSenderId: "978226498483",
    appId: "1:978226498483:web:2da00d0dce99f40d1b99c6",
    measurementId: "G-MC3PYM6FQ7"
};
//import firebase from "firebase";
//const firebaseApp =firebase.initializeApp({
//});
firebase.initializeApp(config);
export const auth =firebase.auth();
export default firebase;
