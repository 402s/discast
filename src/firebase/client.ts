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
import { MessageReplyData } from './types';
import '../utils/dotenv';

const FIREBASE_CLIENT_APP = initializeApp({
  apiKey: process.env.FIREBASE_CLIENT_API_KEY,
  authDomain: process.env.FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CLIENT_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CLIENT_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CLIENT_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CLIENT_APP_ID,
  measurementId: process.env.FIREBASE_CLIENT_MEASUREMENT_ID,
});
const FIREBASE_FIRESTORE = getFirestore(FIREBASE_CLIENT_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_CLIENT_APP);

export async function signIn(): Promise<UserCredential> {
  return signInAnonymously(FIREBASE_AUTH);
}

export async function getToken(): Promise<string> {
  const user = await signIn();
  return user.user.getIdToken();
}

export function getMessagesCollection(): CollectionReference {
  return collection(FIREBASE_FIRESTORE, 'messages');
}

export function getMessageDoc(messageId: string): DocumentReference {
  return doc(getMessagesCollection(), messageId);
}

export function getMessageRepliesCollection(
  messageId: string,
): CollectionReference<MessageReplyData> {
  return collection(getMessageDoc(messageId), 'replies') as CollectionReference<MessageReplyData>;
}

export function getMessageReplyDoc(
  messageId: string,
  replyId: string,
): DocumentReference<MessageReplyData> {
  return doc(getMessageRepliesCollection(messageId), replyId);
}

export function getMessageReplyReactsCollection(
  messageId: string,
  replyId: string,
): CollectionReference {
  return collection(getMessageReplyDoc(messageId, replyId), 'reacts');
}
