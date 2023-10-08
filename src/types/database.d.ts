export type Entry<T extends object = object> = T[];

// Entities
export interface Chat {
  telegramId: number;
  broadcast: boolean;
  vpsUsers: string[];
}

export interface Database {
  chats: Entry<Chat>;
}
