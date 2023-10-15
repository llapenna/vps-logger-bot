import { Context } from 'telegraf';
import { BotCommand, InlineKeyboardButton } from '@telegraf/types';

export type BotCommandWithHandler = BotCommand & {
  handler: (ctx: Context) => void;
};

export type KeyboardWithHandler = {
  buttons: (data: string) => InlineKeyboardButton.CallbackButton[];
  handlerId: string;
  handler: (ctx: Context, params: string[]) => void;
};
