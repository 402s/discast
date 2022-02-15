/* @jsxImportSource solid-js */

import { For, JSX } from 'solid-js';
import type * as discordAPI from 'discord-api-types';
import MessageReact from './MessageReact';
import MessageReplies from './MessageReplies';

interface MessageProps {
  message: discordAPI.APIMessage;
}

export default function Message(props: MessageProps): JSX.Element {
  return (
    <div class="flex flex-col">
      <div class="p-2 rounded-lg bg-gray-900 flex flex-col space-y-1 text-gray-50 w-full">
        <div class="">
          <div class="flex space-x-1 items-center">
            <div class="w-6 h-6 p-1 bg-gradient-to-tr from-slate-500 to-gray-700 rounded-full border" />
            <span class="text-sm font-bold">
              {props.message.author.username}
            </span>
            <span class="text-xs opacity-50">
              {new Date(props.message.timestamp).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div class="text-sm">
          {props.message.content}
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <For each={props.message.reactions}>
            {(item) => (
              <MessageReact
                id={item.emoji.id}
                name={item.emoji.name}
                animated={item.emoji.animated}
                count={item.count}
              />
            )}
          </For>
        </div>
      </div>
      <div class="flex flex-col pl-4">
        <div class="flex flex-col border-l border-gray-900 p-2 space-y-2">
          <MessageReplies
            messageID={props.message.id}
            username={props.message.author.username}
          />
        </div>
      </div>
    </div>
  );
}
