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
// const messaging = firebase.messaging()

// navigator.serviceWorker.register('./service-worker.js')
//   .then((registration) => {
//     messaging.useServiceWorker(registration)
//   })

// messaging.requestPermission()
//   .then(() => {
//     console.log('Permission granted')
//     return messaging.getToken()
//   })
//   .then((token) => {
//     console.log(token)
//   })
//   .catch((err) => {
//     console.log('Permission not granted. ', err)
//   })

// messaging.getToken()
//   .then((currentToken) => {
//     if (currentToken) {
//       // sendTokenToServer(currentToken)
//       // update
//     }
//   })

// messaging.onMessage((payload) => {
//   console.log('onMessage', payload)
// })

export {
  database,
  storage
  // messaging
}
