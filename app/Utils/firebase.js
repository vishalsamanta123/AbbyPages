import firebase from '@react-native-firebase/app';
const config = {
    apiKey: "AIzaSyC3XoEGEtpe9EJQU9uXTa0bLhivekaSBj8",
    authDomain: "abbypages-1604482092750.firebaseapp.com",
    databaseURL: "https://abbypages-1604482092750.firebaseio.com",
    projectId: "abbypages-1604482092750",
    storageBucket: "abbypages-1604482092750.appspot.com",
    messagingSenderId: "448393819239",
    appId: "1:448393819239:web:2466a192d652c018e790c2",
    measurementId: "G-JCNDKEGZEZ"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;