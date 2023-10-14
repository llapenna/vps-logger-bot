import { Context } from 'telegraf';
import { BotCommand, InlineKeyboardButton } from '@telegraf/types';

export type BotCommandWithHandler = BotCommand & {
  handler: (ctx: Context) => void;
};

export type KeyboardWithHandler = (InlineKeyboardButton.CallbackButton & {
  handler: (ctx: Context) => void;
})[];
