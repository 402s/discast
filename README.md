# discast
This is an open source project built by the team at 402 for an idea we were experimenting with. It demonstates an easy Discord bot that can take a segment of a discord conversation and make it publicly available at a given domain with a SolidJs based Web App. The Web App also enables third party users (with auth) to emoji-react to the conversations seperately from the original discord channel.

Feel free to use it in any way you wish under the MIT license.

## Environment Variables

The following environment variables must be contained in `.env` at the root of this project.

### Firebase Admin

We are using Firebase for auth and storing the emoji-reaction data, make you own project and set it up with this project. 
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
You are going to need to make your own discord bot to get the conversation from the relevant discord server. 

```env
DISCORD_CLIENT_ID=
DISCORD_BOT_TOKEN=
```

## Build
Just regular old npm. 

```bash
npm install
```

```bash
npm run build
```

```bash
npm run dev
```
