import app from 'firebase/app';


const config = {
    apiKey: "AIzaSyDd77A377zu8Ib2qXzJKskNCOFY-NAOL8s",
    authDomain: "myblogproject-4573a.firebaseapp.com",
    projectId: "myblogproject-4573a",
    storageBucket: "myblogproject-4573a.appspot.com",
    messagingSenderId: "622769228053",
    appId: "1:622769228053:web:e3c2523e137f9b32b3c11c"
  };


   
class Firebase {
    constructor() {
      app.initializeApp(config);

      this.db = app.database();
    }
  }
   
  export default Firebase;