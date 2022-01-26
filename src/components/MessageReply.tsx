import { JSX } from 'solid-js';

interface MessageReplyProps {
  name: string;
  date: string;
  content: string;
  children: JSX.Element;
}

export default function MessageReply(props: MessageReplyProps): JSX.Element {
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
        {props.children}
      </div>
    </div>
  );
}
