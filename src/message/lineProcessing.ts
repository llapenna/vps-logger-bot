import responses from '@/assets/response.json';
import type { Response, ResponseToken } from '@/types/message';

/**
 * Retreives the appropiate response based on the new line written in the file
 * @param line New line received from the file
 * @returns The response object to be sent to the user
 */
const getCorrectResponse = (line: string): Response | null => {
  for (const response of responses) {
    if (line.includes(response.pattern)) return response;
  }

  return null;
};

/**
 * Splits the line into two, returning the part where the tokens are located
 * @param line File line to be processed
 * @param message Pattern used to extract the tokens
 * @returns Array of strings, containing the tokens
 */
const extractLogFromLine = (line: string, { pattern }: Response) => {
  if (line) {
    return line.split(pattern)[1].split(' ');
  } else return null;
};
/**
 * Gets a list of tokens and its values from the file line
 * @param line File line to be processed
 * @param response Response object containing information about the tokens (name and position)
 * @returns An array of tokens and its values
 */
const getTokensFromLine = (line: string, response: Response) => {
  const log = extractLogFromLine(line, response);
  if (!log) return null;

  const tokens: ResponseToken[] = [];

  // For each
  Object.entries(response.positions).forEach(([key, value]) => {
    tokens.push({ token: key, value: log[value] });
  });

  return tokens;
};

/**
 * Replaces a series of tokens extracted from the file line and constrcuts the response message
 * @param line File line to be processed. Also used to extract the tokens.
 * @returns The response message with the tokens replaced
 */
export const replaceToken = (line: string) => {
  const response = getCorrectResponse(line);
  if (!response) return null;

  const tokens = getTokensFromLine(line, response);
  if (!tokens) return null;

  let replaced = response.message;
  tokens.forEach(({ token, value }) => {
    replaced = replaced.replace(`$${token}$`, value);
  });

  return { replaced, tokens };
};

/**
 * Validates if the message is valid
 * @param message Message to be validated
 * @returns `true` if the message is valid, `false` otherwise
 */
// const isValid = (message: Context['message']) => {
//   return !!message && 'text' in message;
// };
