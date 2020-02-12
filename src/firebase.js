import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpuDGGBJLBP8aDQXBGXw4f4WsciVEdDLE",
  authDomain: "worldstar-crystal-count.firebaseapp.com",
  databaseURL: "https://worldstar-crystal-count.firebaseio.com",
  projectId: "worldstar-crystal-count",
  storageBucket: "worldstar-crystal-count.appspot.com",
  messagingSenderId: "544577187668",
  appId: "1:544577187668:web:6db6f0748dacbec95ae2c1"
};

firebase.initializeApp(firebaseConfig);
const crystalRef = firebase.database().ref('crystals');

export default crystalRef;