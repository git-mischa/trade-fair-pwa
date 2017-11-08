import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAQTVw1P8EGWvqfP4uT0xddTpWfDFaRBkg',
  authDomain: 'trade-fair-pwa.firebaseapp.com',
  databaseURL: 'https://trade-fair-pwa.firebaseio.com',
  projectId: 'trade-fair-pwa',
  storageBucket: 'trade-fair-pwa.appspot.com',
  messagingSenderId: '790039853883'
}

firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
