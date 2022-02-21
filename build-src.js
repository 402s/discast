const rigidity = require('rigidity');
const httpAdapter = require('rigidity-adapter-http').default;

rigidity.createBuild({
  env: process.env.NODE_ENV,
  adapter: httpAdapter,
  ssrMode: 'async',
  esbuild: {
    tsconfig: './tsconfig.json',
    external: [
      'node:timers/promises',
      'node:https',
      'node:events'
    ]
  },
});
