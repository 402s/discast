export default function getAuthToken(request: Request): string | undefined {
  const authorization = request.headers.get('authorization');
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  return undefined;
}
