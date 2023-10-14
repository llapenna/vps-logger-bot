import { Telegraf } from 'telegraf';

import IPCONFIRMATION from './ipConfirmation';

const keyboards = [IPCONFIRMATION];

/**
 * Finds and returns he handler associated with a callback data
 * @param callbackData Callback data identifier
 * @returns Handler associated with the callback data
 */
const findHandler = (callbackData: string) => {
  for (const keyboard of keyboards) {
    for (const button of keyboard) {
      if (button.callback_data === callbackData) {
        return button.handler;
      }
    }
  }

  return null;
};

/**
 * Create a handler to manage button callbacks
 * @param bot Bot instance
 */
const addButtons = (bot: Telegraf) => {
  // Register one handler that will check the callback_data and call the right handler
  bot.on('callback_query', (ctx) => {
    const query = ctx.callbackQuery;

    if ('data' in query) {
      const handler = findHandler(query.data);
      if (handler) handler(ctx);
    }
  });
};
export default addButtons;
