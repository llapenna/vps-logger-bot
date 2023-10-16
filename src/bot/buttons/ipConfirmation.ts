import { KeyboardWithHandler } from '@/types/bot';
import chats from '@/database/chats';
import logger from '@/utils/logger';

import { button } from './utils';

const keyboard: KeyboardWithHandler = {
  buttons: (data) => [
    button('It was me', `ipConfirmation/yes/${data}`),
    button('It was not me', 'ipConfirmation/no'),
  ],
  handlerId: 'ipConfirmation',
  handler: (ctx, params) => {
    const [confirmation, ip] = params;
    const message = ctx.callbackQuery?.message;
    const id = message ? message.chat.id : null;

    if (!id) {
      ctx.reply('Error getting chat id, cannot make changes!');
      logger.info(
        'Error getting chat id, cannot make changes! Message received:',
        message
      );
      return;
    }

    if (confirmation === 'yes') {
      chats
        .whitelistIp(id, ip)
        .then(() => ctx.reply('IP confirmed and whitelisted!'))
        .catch(() => ctx.reply('Error confirming IP!'));
    } else {
      // TODO: ban ip from the vps
    }
  },
};

export default keyboard;
