import firebase from "../../App/utils/config";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import store from '../../App/store/store';
import { loggingInUser } from '../../App/actions/actions';

export const userDB = firebase.firestore();

export async function newUser(user) {
  return new Promise(resolve => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(newUser => {
        userDB
          .collection("users")
          .doc(newUser.user.uid)
          .set({
            age: user.age,
            email: user.email,
            home: {
              city: user.home.city,
              street: user.home.street,
              post_code: user.home.post_code
            },
            name: {
              first: user.name.first,
              last: user.name.last
            },
            photoURL: ""
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", newUser.user.uid);
            return resolve[newUser.user.uid];
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ...
      });
  });
}

export async function logUserIn(email, password) {
  return new Promise(resolve => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        store.dispatch(loggingInUser(user.user.uid));
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  });
}

export function userLogOut() {
  if (firebase.auth().currentUser) {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("logged out");
      });
  }
}

export function isLoggedIn() {
  if (firebase.auth().currentUser === null) {
    return true;
  }
  return false;
}
