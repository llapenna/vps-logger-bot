import { Telegraf } from 'telegraf';
import { BotCommand } from 'telegraf/typings/core/types/typegram';

const START: BotCommand = {
  command: 'start',
  description: 'Start command',
};
const HELP: BotCommand = {
  command: 'help',
  description: 'List all commands and their description',
};
const LOG: BotCommand = {
  command: 'log',
  description: 'Enables logging',
};

/**
 * List of commands
 */
const commands: BotCommand[] = [START, HELP, LOG];

/**
 * Add list of commands to bot
 * @param bot Bot instance
 */
export const addCommands = (bot: Telegraf): void => {
  bot.telegram.setMyCommands(commands);
};

export default commands;
