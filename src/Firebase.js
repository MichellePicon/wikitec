import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyC2B19Szka050wkmH1jCNJS2YaWJCU-6YU",
    authDomain: "contenido-a93b1.firebaseapp.com",
    databaseURL: "https://contenido-a93b1.firebaseio.com",
    projectId: "contenido-a93b1",
    storageBucket: "contenido-a93b1.appspot.com",
    messagingSenderId: "620460190643",
    appId: "1:620460190643:web:bbcbdeb6e4e23e5dd2b9c6"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
