import {
  initializeApp,
} from 'firebase/app';
import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  getFirestore,
} from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  UserCredential,
} from 'firebase/auth';

const FIREBASE_CLIENT_APP = initializeApp({
  apiKey: process.env.FIREBASE_CLIENT_API_KEY,
  authDomain: process.env.FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CLIENT_API_KEY,
  storageBucket: process.env.FIREBASE_CLIENT_API_KEY,
  messagingSenderId: process.env.FIREBASE_CLIENT_API_KEY,
  appId: process.env.FIREBASE_CLIENT_API_KEY,
  measurementId: process.env.FIREBASE_CLIENT_API_KEY,
});
const FIREBASE_FIRESTORE = getFirestore(FIREBASE_CLIENT_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_CLIENT_APP);

export async function signIn(): Promise<UserCredential> {
  return signInAnonymously(FIREBASE_AUTH);
}

export function getMessagesCollection(): CollectionReference {
  return collection(FIREBASE_FIRESTORE, 'messages');
}

export function getMessageDoc(messageId: string): DocumentReference {
  return doc(getMessagesCollection(), messageId);
}

export function getMessageRepliesCollection(messageId: string): CollectionReference {
  return collection(getMessageDoc(messageId), 'replies');
}

export function getMessageReplyDoc(messageId: string, replyId: string): DocumentReference {
  return doc(getMessageRepliesCollection(messageId), replyId);
}

export function getMessageReplyReactsCollection(
  messageId: string,
  replyId: string,
): CollectionReference {
  return collection(getMessageReplyDoc(messageId, replyId), 'reacts');
}
