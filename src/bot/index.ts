import { Telegraf } from 'telegraf';

import { BOT_TOKEN } from '@/utils/config';
import logger from '@/utils/logger';
import watcher from '@/watcher';
import chats from '@/database/chats';

import { addCommands } from './commands';

const bot = new Telegraf(BOT_TOKEN);
/**
 * Sends a message to all chats in the broadcast list
 * @param message Message to broadcast to all chats
 */
const broadcast = async (message: string) => {
  chats
    .getBroadcastList()
    .forEach((chat) => bot.telegram.sendMessage(chat, message));
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
 * Register commands and handlers, using the bot instance
 */
const registerCommands = async () => {
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
  registerCommands,
  start,
  broadcast,
};
export default controls;
