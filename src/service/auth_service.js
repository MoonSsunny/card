import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .catch(console.error);
  }
  onAuthChange(onUserChange) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChange(user);
      console.log(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
