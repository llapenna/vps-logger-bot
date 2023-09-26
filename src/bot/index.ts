import { Telegraf } from 'telegraf';

import { BOT_TOKEN } from '@/utils/config';
import logger from '@/utils/logger';
import watcher from '@/watcher';

import { addCommands } from './commands';
import { CHAT_WHITELIST } from './whitelist';

const bot = new Telegraf(BOT_TOKEN);

/**
 * Sends the given message to all whitelisted users
 * @param message Message to be sent to whitelisted users
 */
const broadcastMessage = async (message: string) => {
  for (const user of CHAT_WHITELIST.list) {
    const msg = message === '' ? 'Empty message 😅' : message;
    await bot.telegram.sendMessage(user, msg);
  }
};

/**
 * Executes cleanup tasks and stops the bot when the process receives a signal
 * @param signal NodeJS script termination signal
 * @returns Function to be called when the signal is received
 */
const handleSignal = async (
  signal: Extract<NodeJS.Signals, 'SIGTERM' | 'SIGINT'>
) => {
  process.once(signal, async () => {
    try {
      logger.info(`${signal} received, stopping bot and watcher.`);
      // Stops bot and watcher
      bot.stop(signal);
      await watcher.stop();
      logger.info('Both watcher and bot stopped successfully!');
    } catch (e) {
      logger.error('An error ocurred while stopping the app!', e);
    }
  });
};

/**
 * Register commands and handlers
 */
const register = async () => {
  // Register handlers
  await addCommands(bot);
};

/**
 * Start bot
 */
const start = () => {
  logger.info('Starting bot...');
  // Launch bot
  bot.launch();
  logger.info('Bot started!');

  // Enable graceful stop
  handleSignal('SIGINT');
  handleSignal('SIGTERM');
};

const controls = {
  register,
  start,
  broadcastMessage,
};
export default controls;
