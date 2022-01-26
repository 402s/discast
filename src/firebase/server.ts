import {
  AppOptions,
  initializeApp,
  credential,
} from 'firebase-admin';

const CREDENTIALS: AppOptions = {
  credential: credential.cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  serviceAccountId: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
};

const FIREBASE_ADMIN = initializeApp(CREDENTIALS);

