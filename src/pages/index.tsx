/* @jsxImportSource solid-js */

'use solid-sfc';

import { BUTTON, LARGE_BUTTON } from '../styles/classes';
import getDiscordInvite from '../utils/get-discord-invite';

let channelID = $signal<string>();
let fromID = $signal<string>();
let toID = $signal<string>();

const isEnabled = $memo(channelID && fromID && toID);

function onChannelInput(ev: InputEvent) {
  channelID = (ev.target as HTMLInputElement).value;
}
function onMessageFromInput(ev: InputEvent) {
  fromID = (ev.target as HTMLInputElement).value;
}
function onMessageToInput(ev: InputEvent) {
  toID = (ev.target as HTMLInputElement).value;
}

export default $view((
  <div class="flex justify-center w-full">
    <div class="flex flex-col justify-center space-y-4 m-4 max-w-md w-full">
      <div class="flex flex-col space-y-2 justify-center items-center">
        <p class="text-gray-50 text-xl">Discast only works if the Discast bot is present in the server.</p>
        <a class={LARGE_BUTTON} href={getDiscordInvite()}>
          Invite to Discord
        </a>
      </div>
      <div class="flex flex-col space-y-2">
        <p class="text-gray-50 text-lg">
          To generate a thread, you will need to provide the Channel ID,
          the ID of the first message and the ID of the last message.
        </p>
        <div class="flex flex-col space-x-1">
          <label class="text-gray-50 text-sm" for="channel">Channel ID</label>
          <input
            class="rounded-lg bg-gray-700 px-2 py-1 text-gray-50 text-sm"
            name="channel"
            onInput={onChannelInput}
            type="text"
          />
        </div>
        <div class="flex flex-col space-x-1">
          <label class="text-gray-50 text-sm" for="channel">Message ID From</label>
          <input
            class="rounded-lg bg-gray-700 px-2 py-1 text-gray-50 text-sm"
            name="message-from"
            onInput={onMessageFromInput}
            type="text"
          />
        </div>
        <div class="flex flex-col space-x-1">
          <label class="text-gray-50 text-sm" for="channel">Message ID To</label>
          <input
            class="rounded-lg bg-gray-700 px-2 py-1 text-gray-50 text-sm"
            name="message-to"
            onInput={onMessageToInput}
            type="text"
          />
        </div>
        <solid:show when={isEnabled}>
          <a class={BUTTON} href={`/${channelID ?? ''}/${fromID ?? ''}/${toID ?? ''}`}>
            View thread
          </a>
        </solid:show>
      </div>
    </div>
  </div>
));
