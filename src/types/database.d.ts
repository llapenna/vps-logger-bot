export type Entry<T extends object = object> = T[];

// Database Fields
export type Chats = Entry<{ telegramId: number; broadcast: boolean }>;

export interface Database {
  chats: Chats;
}
