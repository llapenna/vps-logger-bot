import { Context } from 'telegraf';

import { BotCommandWithHandler } from '@/types/bot';
// import logger from '@/utils/logger';
import chats from '@/database/chats';

const WHITELIST: BotCommandWithHandler = {
  command: 'whitelist',
  description: 'Adds an user to the whitelist',
  handler: (ctx: Context) => {
    const { message } = ctx;
    if (message && 'text' in message) {
      const [, vpsUser] = message.text.split(' ');

      if (vpsUser)
        chats
          .addVpsUser(message.chat.id, vpsUser)
          .then(() => ctx.reply('VPS User added to the whitelist!'))
          .catch(() => ctx.reply('Error adding VPS User to the whitelist!'));
      else ctx.reply('Please, provide a VPS User to add to the whitelist!');
    }
  },
};

export default WHITELIST;
