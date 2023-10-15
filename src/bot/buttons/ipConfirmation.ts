import { KeyboardWithHandler } from '@/types/bot';
import { button } from './utils';
import logger from '@/utils/logger';

const keyboard: KeyboardWithHandler = {
  buttons: (data) => [button('It was me', `ipConfirmation/yes/${data}`)],
  handlerId: 'ipConfirmation',
  handler: (_, params) => {
    logger.info(params);
  },
};

export default keyboard;
