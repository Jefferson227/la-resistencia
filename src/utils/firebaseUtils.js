import firebase from 'firebase';

// Create a .env file for these REACT_APP_ variables before deploying to production
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

firebase.initializeApp(config);

const firebaseDatabase = firebase.database();

export default firebaseDatabase;
