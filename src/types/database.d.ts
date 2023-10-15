// Entities
export interface Chat {
  telegramId: number;
  broadcast: boolean;
  vpsUsers: string[];
  whitelistedIps: string[];
}

export interface Database {
  chats: Chat[];
}
