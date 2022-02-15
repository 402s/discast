/* @jsxImportSource solid-js */

import { For, JSX } from 'solid-js';
import { isServer } from 'solid-js/web';
import type * as discordAPI from 'discord-api-types';
import Message from '../../../components/Message';

interface IndexParams {
  channel: string;
  first: string;
  last: string;
}

interface IndexProps {
  params: IndexParams;
  data: {
    load: discordAPI.APIMessage[];
  };
}

function Index(props: IndexProps): JSX.Element {
  return (
    <div class="flex justify-center w-full">
      <div class="flex flex-col justify-center m-4 max-w-md w-full">
        <For each={props.data.load}>
          {(message) => (
            <Message message={message} />
          )}
        </For>
      </div>
    </div>
  );
}

if (isServer) {
  Index.load = async (request: Request, params: IndexParams) => {
    const { readMessagesRange } = await import('../../../discord');
    return readMessagesRange(params.channel, params.first, params.last);
  };
}

export default Index;
