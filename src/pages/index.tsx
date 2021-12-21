import { JSX } from 'solid-js';
import { isServer } from 'solid-js/web';

interface IndexProps {
  data: string;
}

function Index(props: IndexProps): JSX.Element {
  return (
    <h1>{props.data}</h1>
  );
}

if (isServer) {
  const sleep = (ms: number) => new Promise((resolve) => {
    setTimeout(resolve, ms, true);
  });
  Index.getData = async (request: Request) => {
    await sleep(100);
    return 'Hello World';
  };
}

export default Index;
