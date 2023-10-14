import { KeyboardWithHandler } from '@/types/bot';

const IPCONFIRMATION: KeyboardWithHandler = [
  {
    text: 'It was me',
    callback_data: 'ipConfirmation/yes',
    handler: () => {},
  },
  {
    text: "It wasn't me",
    callback_data: 'ipConfirmation/no',
    handler: () => {},
  },
];

export default IPCONFIRMATION;
