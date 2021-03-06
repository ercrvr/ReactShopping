import firebase from 'firebase';
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET
} from 'react-native-dotenv'

import 'firebase/firestore';



const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    storageBucket: STORAGE_BUCKET,
    projectId: PROJECT_ID
  };

const Firebase = firebase.initializeApp(config);

export const db = firebase.firestore()


export default Firebase