import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyADAGM0LAJXRDaNCKS7j8jKE1Ze1gAqgXk',
  authDomain: 'minimals-fb.firebaseapp.com',
  projectId: 'minimals-fb',
  storageBucket: 'minimals-fb.appspot.com',
  messagingSenderId: '120274895927',
  appId: '1:120274895927:web:d5ea63731c169a0ad96bb2',
};

// Firebaseを紐付け、初期化
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestoreのインスタンス作成
export const firebaseStore = firebaseApp.firestore();

export default firebase;
