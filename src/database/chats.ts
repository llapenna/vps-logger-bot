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
    vpsUsers: [],
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

/**
 * Add a VPS's user to a chat, working as a whitelist
 * @param telegramId Telegram ID of the chat to update
 * @param vpsUser VPS's user to add to add to the chat
 */
const addVpsUser = (
  telegramId: Chats[number]['telegramId'],
  vpsUser: string
) => {
  const chat = getByTelegramId(telegramId);

  // Check if the chat is found
  if (!chat) return Promise.reject();
  // Check if the vps user was already added
  if (chat.vpsUsers.includes(vpsUser)) return Promise.reject();

  // Add the vps user to the chat object
  chat.vpsUsers.push(vpsUser);
  return db.write();
};

const chats = {
  add,
  getBroadcastList,
  addVpsUser,
};
export default chats;
