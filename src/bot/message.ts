import chats from '@/database/chats';
import msg from '@/utils/message';

import bot from '.';

/**
 * Sends a message to all chats in the broadcast list
 * @param message Message to broadcast to all chats
 */
const broadcast = async (message: string) => {
  const processed = msg.process(message);

  if (processed) {
    chats
      .getBroadcastList()
      .forEach((chat) => bot.message.send(chat, processed));
  }
};

const messages = {
  broadcast,
};
export default messages;
