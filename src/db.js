import Vue from 'vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'


Vue.use(firestorePlugin)

// Get a Firestore instance
export const db = firebase
    .initializeApp({ projectId: 'admin-8869c' })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
