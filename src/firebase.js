import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { fireBaseInfo } from './fireBaseInfo'

const firebaseConfig = {
  apiKey: fireBaseInfo.REACT_APP_FIREBASE_KEY,
  authDomain: fireBaseInfo.REACT_APP_AUTH_DOMAIN,
  projectId: fireBaseInfo.REACT_APP_PROJECT_ID,
  storageBucket: fireBaseInfo.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: fireBaseInfo.REACT_APP_MESSAGING_SENDER_ID,
  appId: fireBaseInfo.REACT_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
