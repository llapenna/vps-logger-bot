import { Context } from 'telegraf';

import chats from '@/database/chats';
import { BotCommandWithHandler } from '@/types/bot';
import logger from '@/utils/logger';

const TOGGLE_LOG: BotCommandWithHandler = {
  command: 'toggle_log',
  description:
    'Toggles logging flag. If enabled, the bot will send you updates.',
  handler: (ctx: Context) => {
    const { message } = ctx;
    // Message received from a chat
    if (message) {
      const { id } = message.chat;

      chats
        .toggleBroadcast(id)
        .then((flag) => ctx.reply(`Broadcast feature set to ${flag}!`))
        .catch(() => ctx.reply(`Broadcast couldn't be toggled`));
    } else {
      // Message couldn't be used to retrieve chat id
      logger.info("Message couldn't be used to retrieve chat id");
      ctx.reply(`Error toggling broadcast feature!`);
    }
  },
};

export default TOGGLE_LOG;
