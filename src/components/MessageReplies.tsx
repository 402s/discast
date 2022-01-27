import { onSnapshot, query } from 'firebase/firestore';
import { For, JSX, Show } from 'solid-js';
import { getMessageRepliesCollection, getToken } from '../firebase/client';
import { MessageReplyData } from '../firebase/types';
import { BUTTON, DISABLED_BUTTON } from '../styles/classes';
import MessageReply from './MessageReply';

interface MessageRepliesListProps {
  messageID: string
}

function MessageRepliesList(props: MessageRepliesListProps): JSX.Element {
  let replies = $signal<MessageReplyData[]>();

  $effect(() => {
    const unsubscribe = onSnapshot(
      query(getMessageRepliesCollection(props.messageID)),
      (data) => {
        const result: MessageReplyData[] = [];
        data.forEach((record) => {
          result.push({
            ...record.data(),
            id: record.id,
          });
        });
        replies = result;
      },
      console.error,
    );

    $cleanup(unsubscribe);
  });

  return (
    <Show when={replies}>
      {(items) => (
        <For each={items}>
          {(item) => (
            <MessageReply item={item} />
          )}
        </For>
      )}
    </Show>
  );
}

interface MessageRepliesProps {
  messageID: string
  username: string;
}

export default function MessageReplies(props: MessageRepliesProps): JSX.Element {
  let showReplies = $signal(false);
  let reply = $signal<string>();
  let loading = $signal(false);

  function toggleShowReplies() {
    showReplies = !showReplies;
  }

  async function submitReply() {
    const token = await getToken();

    await fetch('/api/send-reply', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageID: props.messageID,
        content: reply,
      }),
    });

    loading = false;
    reply = undefined;
  }

  function onClick() {
    loading = true;
    submitReply()
      .then(() => {
        loading = false;
      })
      .catch(() => {
        //
      });
  }

  return (
    <>
      <button
        type="button"
        class={BUTTON}
        onClick={toggleShowReplies}
      >
        {`${showReplies ? 'Hide' : 'Show'} Replies`}
      </button>
      <Show when={showReplies}>
        <MessageRepliesList messageID={props.messageID} />
        <div class="flex flex-col space-y-1 bg-gray-900 p-2 rounded-lg">
          <textarea
            class="rounded-lg bg-gray-700 px-2 py-1 text-gray-50 text-sm resize-none"
            value={reply}
            placeholder={`Reply to ${props.username}...`}
            onInput={(ev) => {
              reply = (ev.target as HTMLTextAreaElement).value;
            }}
          />
          <div class="flex flex-row-reverse">
            <button
              type="submit"
              disabled={loading}
              class={loading ? DISABLED_BUTTON : BUTTON}
              onClick={onClick}
            >
              Send
            </button>
          </div>
        </div>
      </Show>
    </>
  );
}
