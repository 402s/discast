
import './dotenv';

const CLIENT_ID = process.env.DISCORD_CLIENT_ID ?? '';

export default function getDiscordInvite(): string {
  return `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=66560&scope=bot`;
}
