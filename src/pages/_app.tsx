/* @jsxImportSource solid-js */

'use solid-sfc';

import { Suspense } from 'solid-js';
import { Link, AppProps } from 'rigidity';
import styles from '../styles/main.css?url';

const props = $props<AppProps>();

export default (
  <>
    <Link rel="stylesheet" href={styles} />
    <div class="flex flex-col p-4 w-full min-h-screen bg-gradient-to-tr from-slate-500 to-gray-700">
      <Suspense fallback={<h1>Loading...</h1>}>
        {props.children}
      </Suspense>
    </div>
  </>
);
