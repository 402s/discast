const rigidity = require('rigidity');
const httpAdapter = require('rigidity-adapter-http').default;

require('dotenv').config();

const ENV_KEYS = new Set([
  'FIREBASE_ADMIN_PROJECT_ID',
  'FIREBASE_ADMIN_CLIENT_EMAIL',
  'FIREBASE_ADMIN_PRIVATE_KEY',
  'FIREBASE_CLIENT_API_KEY',
  'FIREBASE_CLIENT_AUTH_DOMAIN',
  'FIREBASE_CLIENT_PROJECT_ID',
  'FIREBASE_CLIENT_STORAGE_BUCKET',
  'FIREBASE_CLIENT_MESSAGING_SENDER_ID',
  'FIREBASE_CLIENT_APP_ID',
  'FIREBASE_CLIENT_MEASUREMENT_ID',
  'DISCORD_BOT_TOKEN',
  'DISCORD_CLIENT_ID',
]);

function defineEnv() {
  const env = {};
  Object.entries(process.env).forEach(([key, value]) => {
    if (ENV_KEYS.has(key)) {
      env[`process.env.${key}`] = JSON.stringify(value);
    }
  });
  return env;
}

rigidity.createBuild({
  env: process.env.NODE_ENV,
  adapter: httpAdapter,
  ssrMode: 'sync',
  esbuild: {
    tsconfig: './tsconfig.json',
    define: {
      ...defineEnv(),
    },
    external: [
      'node:timers/promises',
      'node:https',
      'node:http',
      'node:events'
    ]
  },
});
