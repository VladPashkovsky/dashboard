import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { fireBaseInfo } from './fireBaseInfo'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBd4N68K7B9HB1qoJvejAAK57GQbNF0mm4",
  authDomain: "admin-dashboard-60ebc.firebaseapp.com",
  projectId: "admin-dashboard-60ebc",
  storageBucket: "admin-dashboard-60ebc.appspot.com",
  messagingSenderId: "233667319150",
  appId: "1:233667319150:web:41fb2c808950a204271d7f",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)