import { Context } from 'telegraf';

import { BotCommandWithHandler } from '@/types/bot';

const HELP: BotCommandWithHandler = {
  command: 'help',
  description: 'List all commands and their description',
  handler: (ctx: Context) => {
    ctx.reply('This is the help list!');
  },
};

export default HELP;
