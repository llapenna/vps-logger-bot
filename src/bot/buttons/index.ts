import { Telegraf } from 'telegraf';

import IPCONFIRMATION from './ipConfirmation';
import { handlerRegex } from './utils';

const keyboards = [IPCONFIRMATION];

/**
 * Create a handler to manage button callbacks
 * @param bot Bot instance
 */
const addButtons = (bot: Telegraf) => {
  for (const keyboard of keyboards) {
    const { handlerId, handler } = keyboard;

    bot.action(handlerRegex(handlerId), (ctx) => {
      const params = ctx.match[1] // Get the callback_data, which is the part after the handlerId
        .split('/')
        // Remove the empty string at the beginning
        .slice(1);

      handler(ctx, params);
    });
  }
};
export default addButtons;
