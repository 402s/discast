import {
  initializeApp,
} from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  CollectionReference,
  DocumentReference,
  QuerySnapshot,
} from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  UserCredential,
} from 'firebase/auth';
import {
  Message,
  MessageReact,
  MessageComment,
  MessageCommentReact,
} from '../types/collections';

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

export function getDiscussions(): CollectionReference {
  return collection(FIREBASE_FIRESTORE, 'discussions');
}

export function getDiscussion(
  start: string,
  end: string,
): DocumentReference {
  return doc(getDiscussions(), `${start}-${end}`);
}

export function getMessages(
  start: string,
  end: string,
): CollectionReference<Message> {
  return collection(getDiscussion(start, end), 'messages') as CollectionReference<Message>;
}

export function getMessage(
  start: string,
  end: string,
  id: string,
): DocumentReference<Message> {
  return doc(getMessages(start, end), id);
}

export function getMessageReacts(
  start: string,
  end: string,
  id: string,
): CollectionReference<MessageReact> {
  return collection(getMessage(start, end, id), 'reacts') as CollectionReference<MessageReact>;
}

export function getMessageComments(
  start: string,
  end: string,
  id: string,
): CollectionReference<MessageComment> {
  return collection(getMessage(start, end, id), 'comments') as CollectionReference<MessageComment>;
}

export function getMessageComment(
  start: string,
  end: string,
  id: string,
  commentId: string,
): DocumentReference<MessageComment> {
  return doc<MessageComment>(getMessageComments(start, end, id), commentId);
}

export function getMessageCommentReacts(
  start: string,
  end: string,
  id: string,
  commentId: string,
): CollectionReference<MessageCommentReact> {
  return collection(getMessageComment(start, end, id, commentId), 'reacts') as CollectionReference<MessageCommentReact>;
}

export async function queryMessages(start: string, end: string): Promise<QuerySnapshot<Message>> {
  return getDocs(getMessages(start, end));
}

export async function signIn(): Promise<UserCredential> {
  return signInAnonymously(FIREBASE_AUTH);
}
