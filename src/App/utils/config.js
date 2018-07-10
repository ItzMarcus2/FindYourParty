import firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyCDqvh2cJlV7PV_of3s-VV9cQyQ1wm5aD4",
  authDomain: "findyourparty-82462.firebaseapp.com",
  databaseURL: "https://findyourparty-82462.firebaseio.com",
  projectId: "findyourparty-82462",
  storageBucket: "findyourparty-82462.appspot.com",
  messagingSenderId: "132519788537"
};

firebase.initializeApp(config);

export default firebase;
