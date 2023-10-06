import { Chats } from '@/types/database';
import logger from '@/utils/logger';

import { db } from '.';

/**
 * Add a chat to the database
 * @param telegramId ID of the chat to add to the database
 */
const add = (telegramId: Chats[number]['telegramId']) => {
  // Check if the user was already added
  if (getByTelegramId(telegramId)) {
    logger.info(`User with telegramId "${telegramId}" already exists!`);
    return Promise.reject();
  }

  db.data.chats.push({
    telegramId,
    broadcast: true,
  });
  logger.info(
    `User with telegramId "${telegramId}" added to the broadcast list!`
  );
  return db.write();
};

/**
 * Get list of chats that should receive broadcast messages
 * @returns List of chats that should receive broadcast messages
 */
const getBroadcastList = () =>
  db.data.chats.filter((chat) => chat.broadcast).map((chat) => chat.telegramId);

/**
 * Get chat with the given `telegramId`
 * @param telegramId Telegram ID of the chat to retrieve
 * @returns Chat object
 */
const getByTelegramId = (telegramId: Chats[number]['telegramId']) =>
  db.data.chats.find((chat) => chat.telegramId === telegramId);

const chats = {
  add,
  getBroadcastList,
};
export default chats;
