/* @jsxImportSource solid-js */
import { JSX, Suspense } from 'solid-js';
import { Link, AppProps } from 'rigidity';
import styles from '../styles/main.css?url';

export default function App(props: AppProps): JSX.Element {
  return (
    <>
      <Link rel="stylesheet" href={styles} />
      <div class="flex flex-col p-4 w-full min-h-screen">
        <Suspense fallback={<h1>Loading...</h1>}>
          <props.Component />
        </Suspense>
      </div>
    </>
  );
}
