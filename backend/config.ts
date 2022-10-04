import firebase from "firebase";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        rules_version : '2',
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase