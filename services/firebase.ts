import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import 'firebase/analytics'

const firebaseConfig= {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "744103055974",
    appId: "1:744103055974:web:36804a62d3f68f0f4053a7"
};
// export default function initFirebase(){
//     if (!firebase.app.length){
//         firebase.initializeApp(config)
//         console.log("Firebase Initalized")
//     }
// }
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()

export const provider = new fb.auth.GoogleAuthProvider();