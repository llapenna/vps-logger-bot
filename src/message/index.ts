import bot from '@/bot';
import chats from '@/database/chats';

import { replaceTokens } from './lineProcessing';

const process = (newLines: string[] | undefined) => {
  if (newLines) {
    newLines.forEach((line) => {
      const processed = replaceTokens(line);
      // If no information was extracted from the line, ignore it
      if (!processed) return;

      const { replaced, tokens } = processed;
      const broadcastList = chats.getBroadcastListByVpsUser(tokens.user);
      bot.broadcast(replaced, broadcastList);
    });
  }
};

const message = {
  process,
};
export default message;
