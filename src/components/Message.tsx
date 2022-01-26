import { JSX } from 'solid-js';

interface MessageProps {
  content: string;
  username: string;
  date: string;
  reacts: JSX.Element;
  replies: JSX.Element;
}

export default function Message(props: MessageProps): JSX.Element {
  return (
    <div class="flex flex-col">
      <div class="p-2 rounded-lg bg-gray-900 bg-opacity-25 flex flex-col space-y-1 text-gray-50 w-full">
        <div class="">
          <div class="flex space-x-1 items-center">
            <div class="w-6 h-6 p-1 bg-gradient-to-tr from-slate-500 to-gray-700 rounded-full border" />
            <span class="text-sm font-bold">
              {props.username}
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
          {props.reacts}
        </div>
      </div>
      <div class="flex flex-col pl-4">
        <div class="flex flex-col border-l p-2 space-y-2">
          {props.replies}
          <div class="flex flex-col space-y-1 bg-gray-900 bg-opacity-25 p-1 rounded-lg">
            <textarea
              class="rounded-lg bg-gray-900 bg-opacity-25 px-2 py-1 text-gray-50 text-sm resize-none"
              placeholder={`Reply to ${props.username}...`}
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
