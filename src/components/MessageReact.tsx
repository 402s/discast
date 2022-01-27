import { JSX, Show } from 'solid-js';
import { SMALL_BUTTON } from '../styles/classes';
import classNames from '../utils/classnames';

interface MessageReactProps {
  id: string | null;
  name: string | null;
  count: number;
  animated?: boolean;
}

function getEmojiLink(id: string, animated = false): string {
  return `https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'webp'}?size=32&quality=lossless`;
}

export default function MessageReact(props: MessageReactProps): JSX.Element {
  return (
    <button
      type="button"
      class={classNames(
        'flex items-center space-x-1',
        'border border-gray-50',
        SMALL_BUTTON,
      )}
    >
      <div class="w-6 h-6 p-1 flex items-center justify-center">
        <Show when={props.id} fallback={props.name}>
          {(item) => (
            <img src={getEmojiLink(item, props.animated)} alt={props.name ?? ''} class="w-full h-full" />
          )}
        </Show>
      </div>
      <span class="text-sm">{props.count}</span>
    </button>
  );
}
