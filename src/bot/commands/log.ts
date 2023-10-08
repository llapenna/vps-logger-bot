import { Context } from 'telegraf';

import chats from '@/database/chats';
import { BotCommandWithHandler } from '@/types/bot';
import { getArgs } from './utils';

const LOG: BotCommandWithHandler = {
  command: 'log',
  description: 'Enables logging for a series of users.',
  handler: (ctx: Context) => {
    const query = getArgs(ctx);

    if (query && query.args.length) {
      const { args: users, message } = query;
      const { id } = message.chat;

      chats
        .addVpsUsers(id, users)
        .then((users) =>
          ctx.reply(`VPS user/s ${users} added to the whitelist!`)
        )
        .catch(() => ctx.reply(`Users couldn't be added to the list!`));
    } else {
      // Message couldn't be used to retrieve chat id
      ctx.reply(`Error adding chat to the broadcast list!`);
    }
  },
};

export default LOG;
