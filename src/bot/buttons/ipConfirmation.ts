import { KeyboardWithHandler } from '@/types/bot';

const IPCONFIRMATION: KeyboardWithHandler = (data) => [
  {
    text: 'It was me',
    callback_data: `ipConfirmation/yes/${data}`,
    handler: (ctx, ip) => {
      console.log(ctx.callbackQuery, ip);
    },
  },
  {
    text: "It wasn't me",
    callback_data: `ipConfirmation/no/${data}`,
    handler: () => {},
  },
];

export default IPCONFIRMATION;
