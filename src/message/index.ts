import bot from '@/bot';
import chats from '@/database/chats';

import { replaceTokens } from './lineProcessing';

const process = async (newLines: string[] | undefined) => {
  if (newLines) {
    // Store each promise
    const promises = newLines.map(async (line) => {
      // TODO: check if the user or ip are whitelisted before replacing tokens
      const processed = await replaceTokens(line);
      // If no information was extracted from the line, ignore it
      if (!processed) return;

      const { replaced, tokens, geolocation } = processed;
      const { user, ip } = tokens;

      const broadcastList = chats.getBroadcastListByVpsUser(user, ip);
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
