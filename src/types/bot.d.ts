import { Context } from 'telegraf';
import { BotCommand } from '@telegraf/types';

export type BotCommandWithHandler = BotCommand & {
  handler: (ctx: Context) => void;
};
