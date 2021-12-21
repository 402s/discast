# discast

## Environment Variables

The following environment variables must be contained in `.env` at the root of this project.

### Firebase Admin

Refer to your Firebase Console > Project Settings > Service Accounts > Firebase Admin SDK > "Generate new private key"

```env
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
```

### Firebase Client

Refer to your Firebase Console > Project Settings > General > Your Apps then generate a new web app.

```env
FIREBASE_CLIENT_API_KEY=
FIREBASE_CLIENT_AUTH_DOMAIN=
FIREBASE_CLIENT_PROJECT_ID=
FIREBASE_CLIENT_STORAGE_BUCKET=
FIREBASE_CLIENT_MESSAGING_SENDER_ID=
FIREBASE_CLIENT_APP_ID=
FIREBASE_CLIENT_MEASUREMENT_ID=
```

### Discord

## Build

```bash
npm install
```

```bash
npm run build
```

```bash
npm run dev
```
