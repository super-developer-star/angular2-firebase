import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: "your API key",
    authDomain: "angular2-firebase-f6f3a.firebaseapp.com",
    databaseURL: "https://angular2-firebase-f6f3a.firebaseio.com",
    storageBucket: "angular2-firebase-f6f3a.appspot.com",
    messagingSenderId: "322183761267"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
