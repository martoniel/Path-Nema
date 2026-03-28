import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey:            'AIzaSyC8DXpWVzZj4GwaJmm4CeAKRtT-E8TXnbw',
  authDomain:        'pathnema-6d4df.firebaseapp.com',
  projectId:         'pathnema-6d4df',
  storageBucket:     'pathnema-6d4df.firebasestorage.app',
  messagingSenderId: '772451354459',
  appId:             '1:772451354459:web:d824fa952aadfafafb3c7e',
}

const app      = initializeApp(firebaseConfig)
export const auth     = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
