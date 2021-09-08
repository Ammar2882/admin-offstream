import { initializeApp } from 'firebase/app'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyAaqcTG77MhGCLoPheVwtCvWRgfeSlNKVg',
  authDomain: 'offstream-95814.firebaseapp.com',
  projectId: 'offstream-95814',
  storageBucket: 'offstream-95814.appspot.com',
  messagingSenderId: '489729359694',
  appId: '1:489729359694:web:20e4bbec01bea8521e281f',
  measurementId: 'G-631Q6XFDH3'
}
const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)

export { firebaseApp, storage, ref, uploadBytes, getDownloadURL }