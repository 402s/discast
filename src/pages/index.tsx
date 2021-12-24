import { JSX } from 'solid-js';
import { isServer } from 'solid-js/web';

interface MessageReactProps {
  value: string;
  count: number;
}

function MessageReact(props: MessageReactProps) {
  return (
    <div class="flex items-center space-x-1 p-1 rounded-lg bg-gray-900 bg-opacity-25">
      <div class="w-6 h-6 flex items-center justify-center">{props.value}</div>
      <span class="text-sm">{props.count}</span>
    </div>
  );
}

interface MessageReplyProps {
  name: string;
  date: string;
  content: string;
}

function MessageReply(props: MessageReplyProps) {
  return (
    <div class="p-2 rounded-lg bg-gray-900 bg-opacity-25 flex flex-col space-y-1 text-white w-full">
      <div class="">
        <div class="flex space-x-1 items-center">
          <div class="w-6 h-6 p-1 bg-gradient-to-tr from-slate-500 to-gray-700 rounded-full border" />
          <span class="text-sm">
            {props.name}
          </span>
          <span class="text-xs opacity-50">
            {props.date}
          </span>
        </div>
      </div>
      <div class="text-sm">
        {props.content}
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <MessageReact value="❤️" count={123} />
        <MessageReact value="👀" count={123} />
        <MessageReact value="🚀" count={123} />
        <MessageReact value="😂" count={123} />
      </div>
    </div>
  );
}

function Message() {
  return (
    <div class="flex flex-col">
      <div class="p-2 rounded-lg bg-gray-900 bg-opacity-25 flex flex-col space-y-1 text-gray-50 w-full">
        <div class="">
          <div class="flex space-x-1 items-center">
            <div class="w-6 h-6 p-1 bg-gradient-to-tr from-slate-500 to-gray-700 rounded-full border" />
            <span class="">
              Alexis Munsayac
            </span>
            <span class="text-xs opacity-50">
              25/12/2021 10:30AM
            </span>
          </div>
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <MessageReact value="❤️" count={123} />
          <MessageReact value="👀" count={123} />
          <MessageReact value="🚀" count={123} />
          <MessageReact value="😂" count={123} />
        </div>
      </div>
      <div class="flex flex-col pl-4">
        <div class="flex flex-col border-l p-2 space-y-2">
          <MessageReply
            name="Alexis Munsayac"
            date="25/12/2021 10:30AM"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <MessageReply
            name="Alexis Munsayac"
            date="25/12/2021 10:30AM"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <div class="flex flex-col space-y-1 bg-gray-900 bg-opacity-25 p-1 rounded-lg">
            <textarea
              class="rounded-lg bg-gray-900 bg-opacity-25 px-2 py-1 text-gray-50 text-sm resize-none"
              placeholder="Reply to Alexis Munsayac..."
            />
            <div class="flex flex-row-reverse">
              <div class="text-xs text-gray-50 space-x-1 py-1 px-2 rounded-lg bg-gray-900 bg-opacity-25">
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IndexProps {
  data: string;
}

function Index(props: IndexProps): JSX.Element {
  return (
    <div class="flex justify-center w-full">
      <div class="flex flex-col justify-center m-4 max-w-md w-full">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
}

if (isServer) {
  // const sleep = (ms: number) => new Promise((resolve) => {
  //   setTimeout(resolve, ms, true);
  // });
  // Index.getData = async (request: Request) => {
  //   await sleep(100);
  //   return 'Hello World';
  // };
}

export default Index;
