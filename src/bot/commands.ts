import { Context, Telegraf } from 'telegraf';

import { BotCommandWithHandler } from '@/types/bot';
import logger from '@/utils/logger';

import { CHAT_WHITELIST } from './whitelist';

const START: BotCommandWithHandler = {
  command: 'start',
  description: 'Start command',
  handler: (ctx: Context) => {
    logger.info('START command received', ctx.message);
    ctx.reply('Hello world!');
  },
};
const HELP: BotCommandWithHandler = {
  command: 'help',
  description: 'List all commands and their description',
  handler: (ctx: Context) => {
    logger.info('HELP command received', ctx);
    ctx.reply('This is the help list!');
  },
};
const LOG: BotCommandWithHandler = {
  command: 'log',
  description: 'Enables logging',
  handler: (ctx: Context) => {
    logger.info('LOG command received');
    // Message received from a chat
    if (ctx.message) {
      const { id } = ctx.message.chat;

      CHAT_WHITELIST.add(id);
      ctx.reply(
        `Chat with id"${id}" added to the whitelist! From now on you will receive all logs!`
      );
    } else {
      // Message couldn't be used to retrieve chat id
      logger.info("Message couldn't be used to retrieve chat id");
      ctx.reply(`Chat cannot be added to whitelist!`);
    }
  },
};

/**
 * List of commands
 */
const commands = [START, HELP, LOG];

/**
 * Add list of commands to bot and their handlers
 * @param bot Bot instance
 */
export const addCommands = async (bot: Telegraf): Promise<void> => {
  // First add all commands
  await bot.telegram.setMyCommands(commands);

  // Then add handlers
  for (const cmd of commands) {
    const { command, handler } = cmd;
    await bot.command(command, handler);
  }
};

export default commands;
