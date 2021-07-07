import firebase from "firebase/app"
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCATeIpncIg9kmvBXm5LpecVRxh90u37n8",
    authDomain: "bluestack-985a5.firebaseapp.com",
    databaseURL: "https://bluestack-985a5-default-rtdb.firebaseio.com",
    projectId: "bluestack-985a5",
    storageBucket: "bluestack-985a5.appspot.com",
    messagingSenderId: "153728238270",
    appId: "1:153728238270:web:10d1c1c8de92515837d4ef",
    measurementId: "G-321M5VZFN4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
