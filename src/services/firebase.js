import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyCixDy-ARMliq4_e1MxgDkZBCnydboXxp0',
  authDomain: 'mobile-network-9b91d.firebaseapp.com',
  projectId: 'mobile-network-9b91d',
  storageBucket: 'mobile-network-9b91d.appspot.com',
  messagingSenderId: '118656983000',
  appId: '1:118656983000:web:ad3a65d469918cb17bdcad',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
