import { Telegraf } from 'telegraf';

import START from './start';
import HELP from './help';
import LOG from './log';

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
