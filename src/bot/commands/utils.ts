import { Context } from 'telegraf';

/**
 * Retrieves the arguments sent via a message.
 * @param message Message from Telegram chat.
 * @returns The list of arguments from the message, or null if there was a problem with the message.
 */
export const getArgs = (context: Context) => {
  const { message } = context;

  if (message && 'text' in message) {
    // Remove command from message
    const [, ...args] = message.text.split(/\s+/);
    return { args, message };
  } else return null;
};
