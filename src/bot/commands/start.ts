import { Context } from 'telegraf';

import { BotCommandWithHandler } from '@/types/bot';
import logger from '@/utils/logger';

const START: BotCommandWithHandler = {
  command: 'start',
  description: 'Start command',
  handler: (ctx: Context) => {
    logger.info('START command received', ctx.message);
    ctx.reply('Hello world!');
  },
};

export default START;
