import { Chats } from '@/types/database';
import logger from '@/utils/logger';

import { db } from '.';

/**
 * Add a chat to the database
 * @param telegramId ID of the chat to add to the database
 */
const add = async (telegramId: Chats[number]['telegramId']) => {
  const data = {
    telegramId,
    broadcast: true,
    vpsUsers: [],
  };

  // Check if the user was already added
  if (getByTelegramId(telegramId)) {
    logger.info(`User with telegramId "${telegramId}" already exists!`);
    return Promise.resolve(data);
  }

  db.data.chats.push(data);
  logger.info(
    `User with telegramId "${telegramId}" added to the broadcast list!`
  );
  await db.write();
  return data;
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
const addVpsUser = async (
  telegramId: Chats[number]['telegramId'],
  vpsUser: string
) => {
  let chat = getByTelegramId(telegramId);

  // If the chat cannot be found, add it to the database
  if (!chat) {
    chat = await add(telegramId);
  }
  // Check if the vps user was already added
  if (chat.vpsUsers.includes(vpsUser)) return Promise.resolve();

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
