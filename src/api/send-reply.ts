import { ServerSideContext } from 'rigidity';
import { authenticate, createMessageReplyData } from '../firebase/server';
import { MessageReplyPayload } from '../firebase/types';
import getAuthToken from '../utils/get-auth-token';

export default async function sendReply({ request }: ServerSideContext): Promise<Response> {
  const token = getAuthToken(request);
  if (token) {
    const user = await authenticate(token);
    const formData = (await request.json()) as MessageReplyPayload;
    await createMessageReplyData(user.uid, formData);
    return new Response(undefined, {
      status: 200,
    });
  }
  return new Response(undefined, {
    status: 401,
  });
}
