import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBCYSTevB-CPxN6qSAA0eyOiCLl1BllJU8',
    authDomain: 'react-links-1df04.firebaseapp.com',
    databaseURL: 'https://react-links-1df04.firebaseio.com',
    projectId: 'react-links-1df04',
    storageBucket: 'react-links-1df04.appspot.com',
    messagingSenderId: '1041640929997',
}
const fire = firebase.initializeApp(config)
export default fire
