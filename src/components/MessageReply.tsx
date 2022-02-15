/* @jsxImportSource solid-js */

import { JSX, Show, Suspense } from 'solid-js';
import { MessageReplyData, UserData } from '../firebase/types';

interface MessageReplyProps {
  item: MessageReplyData;
}

export default function MessageReply(props: MessageReplyProps): JSX.Element {
  const [data] = $resource(() => props.item.user, async (uid) => {
    const response = await fetch(`/api/users/${uid}`);
    return response.json() as UserData;
  });

  return (
    <div class="p-2 rounded-lg bg-gray-900 flex flex-col space-y-1 text-white w-full">
      <div class="">
        <div class="flex space-x-1 items-center">
          <div class="w-6 h-6 p-1 bg-gradient-to-tr from-slate-500 to-gray-700 rounded-full border" />
          <span class="text-sm font-bold">
            <Suspense>
              <Show when={data()}>
                {(result) => (result.displayName ?? 'Anonymous')}
              </Show>
            </Suspense>
          </span>
          <span class="text-xs opacity-50">
            {props.item.date}
          </span>
        </div>
      </div>
      <div class="text-sm">
        {props.item.content}
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        {}
      </div>
    </div>
  );
}
