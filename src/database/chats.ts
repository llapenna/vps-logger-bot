import { Chat } from '@/types/database';
import logger from '@/utils/logger';

import { db } from '.';

/**
 * Add a chat to the database
 * @param telegramId ID of the chat to add to the database
 */
const add = async (telegramId: Chat['telegramId']) => {
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
const getByTelegramId = (telegramId: Chat['telegramId']) =>
  db.data.chats.find((chat) => chat.telegramId === telegramId) ?? null;

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

/**
 * Retreives a list of users that should receive broadcast messages from a given VPS user
 * @param vpsUser VPS User to look for
 * @returns A list of telegram IDs
 */
const getBroadcastListByVpsUser = (vpsUser: string) => {
  return (
    db.data.chats
      // Remove users from broadcast list
      .filter(({ broadcast }) => broadcast)
      // Filter by vps user
      .filter((chat) => chat.vpsUsers.includes(vpsUser))
      // Get telegram IDs
      .map((chat) => chat.telegramId)
  );
};

/**
 * Toggle broadcast flag for a given chat
 * @param telegramId Telegram ID of the chat to update
 */
const toggleBroadcast = async (telegramId: number): Promise<boolean> => {
  const chat = getByTelegramId(telegramId);
  if (!chat) return Promise.reject();

  chat.broadcast = !chat.broadcast;
  await db.write();
  return chat.broadcast;
};

/**
 * Checks for a given chat if a given VPS user is in the whitelist
 * @param chat Chat reference. Could be an ID (number) or a Chat (object)
 * @param vpsUser User to check if is in the whitelist
 * @returns `true` if the user is in the whitelist, `false` otherwise
 */
const hasVpsUser = (chat: number | Chat, vpsUser: string) => {
  let object: Chat | null = null;
  if (typeof chat === 'number') {
    object = getByTelegramId(chat);

    // Chat cannot be found
    if (!object) return false;
  } else object = chat;

  // Now that we have the chat object, check if the vps user is in the whitelist
  return object.vpsUsers.includes(vpsUser);
};

const chats = {
  add,
  getBroadcastList,
  addVpsUser,
  getBroadcastListByVpsUser,
  toggleBroadcast,
  hasVpsUser,
};
export default chats;
