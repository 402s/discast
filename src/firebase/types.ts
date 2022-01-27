import { DocumentData } from 'firebase/firestore';

export interface MessageReplyPayload {
  messageID: string;
  content: string;
}

export interface MessageReplyData extends DocumentData {
  id: string;
  user: string;
  content: string;
}

export interface MessageReplyReactData extends DocumentData {
  id: string;
  value: string;
  owner: string;
}

export interface UserData {
  displayName?: string;
}
