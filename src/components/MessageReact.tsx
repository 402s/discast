import { JSX, Show } from 'solid-js';

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
    <div class="flex items-center space-x-1 px-1 py-0.5 rounded-lg bg-gray-900 bg-opacity-25">
      <div class="w-6 h-6 p-1 flex items-center justify-center">
        <Show when={props.id} fallback={props.name}>
          {(item) => (
            <img src={getEmojiLink(item, props.animated)} alt={props.name ?? ''} class="w-full h-full" />
          )}
        </Show>
      </div>
      <span class="text-sm">{props.count}</span>
    </div>
  );
}
