import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA3CBTkwurmvWoDBmszDmfuRa-QugXvfBs",
    authDomain: "discord-clone-yt-3c1df.firebaseapp.com",
    databaseURL: "https://discord-clone-yt-3c1df.firebaseio.com",
    projectId: "discord-clone-yt-3c1df",
    storageBucket: "discord-clone-yt-3c1df.appspot.com",
    messagingSenderId: "13272221797",
    appId: "1:13272221797:web:e35887d481346642bc1e8c",
    measurementId: "G-6ED4HXVJKG"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;