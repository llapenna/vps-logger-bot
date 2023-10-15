import { Markup } from 'telegraf';

/**
 * Generates a CallbackButton
 * @param text Button label
 * @param data Data to be sent when the button is pressed
 * @returns A Telegram CallbackButton
 */
export const button = (text: string, data: string) =>
  Markup.button.callback(text, data);

/**
 * Generates a regular expression that matches the handlerId and the callback_data params
 * @param handlerId Handler group identifier
 * @returns Regular expression
 */
export const handlerRegex = (handlerId: string) =>
  new RegExp(`^${handlerId}(/.+)+$`);
