import { Chat } from '@/types/database';
import logger from '@/utils/logger';

import { db } from '.';

/**
 * Add a chat to the database
 * @param telegramId ID of the chat to add to the database
 */
const add = async (telegramId: Chat['telegramId']) => {
  const data: Chat = {
    telegramId,
    broadcast: true,
    vpsUsers: [],
    whitelistedIps: [],
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
 * Add multiple VPS's users to a chat entry, working as a whitelist
 * @param telegramId Telegram ID of the chat to update
 * @param vpsUsers VPS's array of users to add to add to the chat
 */
const addVpsUsers = async (
  telegramId: Chat['telegramId'],
  vpsUsers: string[]
) => {
  let chat = getByTelegramId(telegramId);

  // If the chat cannot be found, add it to the database
  if (!chat) {
    logger.info(
      `Cannot add VPS User to chat ${telegramId}, chat not found! Creating it...`
    );
    chat = await add(telegramId);
  }

  vpsUsers.forEach((user) => {
    // Check if the vps user was already added
    if (!hasVpsUser(chat!, user)) {
      chat!.vpsUsers.push(user);
    }
  });

  logger.info(
    `Added VPS Users [${vpsUsers.join(', ')}] to chat ${telegramId}.`
  );
  await db.write();
  return vpsUsers;
};

/**
 * Retreives a list of users that should receive broadcast messages from a given VPS user
 * @param vpsUser VPS User to look for
 * @returns A list of telegram IDs
 */
const getBroadcastListByVpsUser = (vpsUser: string, ip: string) => {
  return (
    db.data.chats
      // Remove users whose broadcast flag is false
      .filter(({ broadcast }) => broadcast)
      // Remove whitelisted IPS
      .filter(({ whitelistedIps }) => !whitelistedIps.includes(ip))
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
  if (!chat) {
    logger.info(`Chat ${telegramId} not found! Couldn't toggle broadcast.`);
    return Promise.reject();
  }

  chat.broadcast = !chat.broadcast;
  logger.info(
    `Toggling broadcast flag for chat ${telegramId}. New value: ${chat.broadcast}`
  );

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

/**
 * Add an IP to the whitelist of a given chat
 * @param telegramId Telegram ID of the chat to update
 * @param ip IP to add to the whitelist
 */
const whitelistIp = (telegramId: number, ip: string) => {
  const chat = getByTelegramId(telegramId);
  if (!chat) {
    logger.info(`Chat ${telegramId} not found! Couldn't whitelist IP ${ip}.`);
    return Promise.reject();
  }

  // Check if the IP was already added
  if (chat.whitelistedIps.includes(ip)) {
    logger.info(`IP ${ip} already whitelisted for chat ${telegramId}.`);
    return Promise.resolve();
  }

  logger.info(`Whitelisting IP ${ip} for chat ${telegramId}.`);

  chat.whitelistedIps.push(ip);
  return db.write();
};

const chats = {
  add,
  getBroadcastList,
  addVpsUsers,
  getBroadcastListByVpsUser,
  toggleBroadcast,
  hasVpsUser,
  whitelistIp,
};
export default chats;
