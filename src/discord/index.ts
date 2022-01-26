import { REST } from '@discordjs/rest';
import * as discordAPI from 'discord-api-types/v9';

export const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN ?? '');

export async function readMessage(
  channelId: discordAPI.Snowflake,
  messageId: discordAPI.Snowflake,
): Promise<discordAPI.APIMessage> {
  const result = await rest.get(discordAPI.Routes.channelMessage(channelId, messageId));
  return result as discordAPI.APIMessage;
}

export async function readMessages(
  channelId: discordAPI.Snowflake,
  messageId: discordAPI.Snowflake,
): Promise<discordAPI.APIMessage[]> {
  const result = await rest.get(`${discordAPI.Routes.channelMessages(channelId)}?after=${messageId}&limit=100`);
  return (result as discordAPI.APIMessage[]).reverse();
}

async function readMessagesRecursive(
  channelId: discordAPI.Snowflake,
  first: discordAPI.Snowflake,
  last: discordAPI.Snowflake,
): Promise<discordAPI.APIMessage[]> {
  const result: discordAPI.APIMessage[] = [];
  const pending = await readMessages(channelId, first);
  for (let i = 0, len = pending.length; i < len; i += 1) {
    const message = pending[i];
    result.push(message);
    if (message.id === last) {
      return result;
    }
  }
  return [
    ...result,
    ...await readMessagesRecursive(
      channelId,
      result[result.length - 1].id,
      last,
    ),
  ];
}

export async function readMessagesRange(
  channelId: discordAPI.Snowflake,
  first: discordAPI.Snowflake,
  last: discordAPI.Snowflake,
): Promise<discordAPI.APIMessage[]> {
  const firstMessage = await readMessage(channelId, first);
  const result = [firstMessage];

  if (first === last) {
    return result;
  }

  const lastMessage = await readMessage(channelId, last);

  if (firstMessage.channel_id !== lastMessage.channel_id) {
    return result;
  }

  const firstTimestamp = new Date(firstMessage.timestamp).getTime();
  const lastTimestamp = new Date(lastMessage.timestamp).getTime();

  if (firstTimestamp > lastTimestamp) {
    return result;
  }

  return result.concat(await readMessagesRecursive(
    channelId,
    first,
    last,
  ));
}
