const rigidity = require('rigidity');

require('dotenv').config();

function defineEnv() {
  const env = {};
  Object.entries(process.env).forEach(([key, value]) => {
    env[`process.env.${key}`] = JSON.stringify(value);
  });
  return env;
}

rigidity.createBuild({
  env: process.env.NODE_ENV,
  adapter: process.env.NODE_ENV === 'production' ? 'vercel' : 'http',
  ssrMode: 'async',
  esbuild: {
    tsconfig: './tsconfig.json',
    define: {
      ...defineEnv(),
    },
  },
});
