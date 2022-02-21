import firebaseAdmin from 'firebase-admin';
import { MessageReplyPayload } from './types';

const CREDENTIALS: firebaseAdmin.AppOptions = {
  credential: firebaseAdmin.credential.cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  serviceAccountId: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
};

const FIREBASE_ADMIN = firebaseAdmin.initializeApp(CREDENTIALS);
const FIREBASE_AUTH = FIREBASE_ADMIN.auth();
const FIREBASE_FIRESTORE = FIREBASE_ADMIN.firestore();

export async function authenticate(token: string) {
  return FIREBASE_AUTH.verifyIdToken(token);
}

export async function createMessageReplyData(
  uid: string,
  payload: MessageReplyPayload,
): Promise<void> {
  await FIREBASE_FIRESTORE.collection('messages')
    .doc(payload.messageID)
    .collection('replies')
    .add({
      user: uid,
      content: payload.content,
    });
}

export async function getUser(uid: string) {
  const record = await FIREBASE_AUTH.getUser(uid);
  return record.toJSON();
}
