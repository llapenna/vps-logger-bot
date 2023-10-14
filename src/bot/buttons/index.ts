import { Context, Telegraf } from 'telegraf';

import IPCONFIRMATION from './ipConfirmation';

const keyboards = [IPCONFIRMATION];

/**
 * Retrieves information from a callback data
 * @param callbackData Callback data identifier
 * @returns Handler name and data associated with the callback data
 */
const getCallbackInfo = (callbackData: string) => {
  const [groupName, handler, data] = callbackData.split('/');
  return { handlerName: `${groupName}/${handler}`, data };
};

/**
 * Finds and returns he handler associated with a callback data
 * @param callbackData Callback data identifier
 * @returns Handler associated with the callback data
 */
const findHandler = (callbackData: string) => {
  const { handlerName, data } = getCallbackInfo(callbackData);

  for (const keyboard of keyboards) {
    for (const { callback_data, handler } of keyboard(data)) {
      if (callback_data.includes(handlerName)) {
        return (ctx: Context) => handler(ctx, data);
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
