import { Telegraf } from 'telegraf';

import { BOT_TOKEN } from '@/utils/config';
import logger from '@/utils/logger';

import { addCommands } from './commands';

const bot = new Telegraf(BOT_TOKEN);

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
const start = async () => {
  logger.info('Starting bot...');
  // Launch bot
  await bot.launch();
  logger.info('Bot started!');

  // Enable graceful stop
  process.once('SIGINT', () => {
    logger.info('SIGINT received, bot stopped!');
    bot.stop('SIGINT');
  });
  process.once('SIGTERM', () => {
    logger.info('SIGTERM received, bot stopped!');
    bot.stop('SIGTERM');
  });
};

const controls = {
  register,
  start,
};
export default controls;
