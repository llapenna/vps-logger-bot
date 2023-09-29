import messages from '@/assets/message.json';
import type { Message } from '@/types/message';
import logger from './logger';

/**
 * Splits the line into two, returning the part where the tokens are located
 * @param line Line to be processed
 * @param message Pattern used to extract the tokens
 * @returns Array of strings, containing the tokens
 */
const extractFromPattern = (line: string, { pattern }: Message) => {
  if (line) {
    return line.split(pattern)[1].split(' ');
  } else return null;
};

/**
 * Extracts the tokens from the line
 * @param line Line to be processed
 * @param message Message containing information about the tokens (name and position)
 * @returns Object containing the tokens and its values
 */
const extractToken = (line: string[], message: Message) => {
  let obj: Record<string, string> = {};
  Object.entries(message.positions).forEach(([key, value]) => {
    obj = { ...obj, [key]: line[value] };
  });

  return obj;
};

/**
 * Replaces the tokens in the message with the values
 * @param tokens Object containing the tokens and its values
 * @param message Message containing the response to be sent to the user
 * @returns Formatted message
 */
const replaceToken = (tokens: Record<string, string>, message: Message) => {
  let str = message.response;

  Object.entries(tokens).forEach(([key, value]) => {
    str = str.replace(`$${key}$`, value);
  });

  return str;
};

/**
 * Retrieves the correct message based on the provided patterns
 * @param line Line to be processed
 * @returns The message found or null if no message matched
 */
const filterPatterns = (line: string) => {
  for (const msg of messages) {
    if (line.includes(msg.pattern)) return msg;
  }

  return null;
};

/**
 *  Process a line and returns a formatted message to be sent to the user
 * @param line Line to be processed
 * @returns String response
 */
export const process = (line: string) => {
  const message = filterPatterns(line);
  if (!message) return null;

  const extracted = extractFromPattern(line, message);
  if (!extracted) return null;

  const tokenized = extractToken(extracted, message);
  const response = replaceToken(tokenized, message);
  logger.info(`Sending '${response}' to whitelisted users.`);
  return replaceToken(tokenized, message);
};

const message = {
  process,
};
export default message;
