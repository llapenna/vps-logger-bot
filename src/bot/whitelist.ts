import { Whitelist } from '@/types/bot';

export const CHAT_WHITELIST: Whitelist = {
  list: [],
  add(id: number) {
    this.list.push(id);
  },
  remove(id: number) {
    this.list = this.list.filter((chatId) => chatId !== id);
  },
};
