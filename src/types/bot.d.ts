import { Context } from 'telegraf';
import { BotCommand } from '@telegraf/types';

export type BotCommandWithHandler = BotCommand & {
  handler: (ctx: Context) => void;
};

export type Whitelist = {
  list: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
};
