import { Context } from 'telegraf';

import chats from '@/database/chats';
import { BotCommandWithHandler } from '@/types/bot';
import logger from '@/utils/logger';

const LOG: BotCommandWithHandler = {
  command: 'log',
  description: 'Enables logging',
  handler: (ctx: Context) => {
    const { message } = ctx;
    // Message received from a chat
    if (message) {
      const { id } = message.chat;

      chats
        .add(id)
        .then(() => {
          ctx.reply(`Chat with id "${id}" added to the broadcast list!`);
        })
        .catch(() => {
          ctx.reply(`Chat with id "${id}" was already added to the list!`);
        });
    } else {
      // Message couldn't be used to retrieve chat id
      logger.info("Message couldn't be used to retrieve chat id");
      ctx.reply(`Chat cannot be added to broadcast list!`);
    }
  },
};

export default LOG;
