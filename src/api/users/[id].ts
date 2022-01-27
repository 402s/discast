import { RouterParams, ServerSideContext } from 'rigidity';
import { getUser } from '../../firebase/server';

interface GetUserParams extends RouterParams {
  id: string;
}

export default async function sendReply(
  { params }: ServerSideContext<GetUserParams>,
): Promise<Response> {
  const result = await getUser(params.id);
  if (result) {
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return new Response(undefined, {
    status: 404,
  });
}
