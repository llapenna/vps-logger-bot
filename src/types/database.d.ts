export type Entry<T extends object = {}> = ({ id: number } & T)[];

// Database Fields
export type Chat = Entry<{ telegramId }>;
export type BroadcastList = Entry<{ userId: string }>;

export interface Database {
  chats: Chat;
  broadcastList: BroadcastList;
}
