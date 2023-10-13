import bot from '@/bot';
import chats from '@/database/chats';

import { replaceTokens } from './lineProcessing';

const process = async (newLines: string[] | undefined) => {
  if (newLines) {
    // Store each promise
    const promises = newLines.map(async (line) => {
      const processed = await replaceTokens(line);
      // If no information was extracted from the line, ignore it
      if (!processed) return;

      const { replaced, tokens, geolocation } = processed;

      const broadcastList = chats.getBroadcastListByVpsUser(tokens.user);
      bot.broadcast(replaced, broadcastList, geolocation);
    });

    // Wait for all promises to resolve
    await Promise.all(promises);
  }
};

const message = {
  process,
};
export default message;
