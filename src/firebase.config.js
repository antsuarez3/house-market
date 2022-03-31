import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqBgUK7ax1SNZTGXvktW38aFHJkYd1zwo',
  authDomain: 'house-market-app-b23d5.firebaseapp.com',
  projectId: 'house-market-app-b23d5',
  storageBucket: 'house-market-app-b23d5.appspot.com',
  messagingSenderId: '536384516305',
  appId: '1:536384516305:web:c610bd6d7ebd2de0d2d5f0',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
initializeApp(firebaseConfig)
export const db = getFirestore()
