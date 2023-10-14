import { Context } from 'telegraf';
import { BotCommand, InlineKeyboardButton } from '@telegraf/types';

export type BotCommandWithHandler = BotCommand & {
  handler: (ctx: Context) => void;
};

export type KeyboardWithHandler = (
  data: string
) => (InlineKeyboardButton.CallbackButton & {
  handler: (ctx: Context, data: string) => void;
})[];
