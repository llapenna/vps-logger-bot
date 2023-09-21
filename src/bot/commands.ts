import { BotCommandWithHandler } from '@/types/bot';
import { Context, Telegraf } from 'telegraf';

const START: BotCommandWithHandler = {
  command: 'start',
  description: 'Start command',
  handler: (ctx: Context) => {
    console.log(ctx);
  },
};
const HELP: BotCommandWithHandler = {
  command: 'help',
  description: 'List all commands and their description',
  handler: (ctx: Context) => {
    console.log(ctx);
  },
};
const LOG: BotCommandWithHandler = {
  command: 'log',
  description: 'Enables logging',
  handler: (ctx: Context) => {
    console.log(ctx);
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
