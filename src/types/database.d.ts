export type Entry<T extends object = object> = T[];

// Database Fields
export type Chats = Entry<{
  telegramId: number;
  broadcast: boolean;
  vpsUsers: string[];
}>;

export interface Database {
  chats: Chats;
}
