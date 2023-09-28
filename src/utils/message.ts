import messages from '@/assets/message.json';

const removeLogPrefix = (message: string) =>
  message && message.split(/\[[0-9]+\]: /)[1];

/**
 * Process an 'attemp' line and returns a formatted message to be sent to the user
 * @param message Message to be processed
 * @returns Formatted message
 */
const processAttemp = (message: string): string => {
  const splitted = message.split(' ');
  const [user, , ip, , port] = splitted.slice(2);

  return messages.attemp
    .replace('$user$', user)
    .replace('$ip$', ip)
    .replace('$port$', port);
};

/**
 * Process a 'login' line and returns a formatted message to be sent to the user
 * @param message Message to be processed
 * @returns Formatted message
 */
const processLogin = (message: string): string => {
  const splitted = message.split(' ');
  const [user, , ip, , port] = splitted.slice(3);

  return messages.login
    .replace('$user$', user)
    .replace('$ip$', ip)
    .replace('$port$', port);
};

/**
 * Process a 'disconnect' line and returns a formatted message to be sent to the user
 * @param message Message to be processed
 * @returns Formatted message
 */
const processDisconnect = (message: string): string => {
  const splitted = message.split(' ');
  const [user, ip, , port] = splitted.slice(3);

  return messages.disconnected
    .replace('$user$', user)
    .replace('$ip$', ip)
    .replace('$port$', port);
};

const process = (message: string) => {
  const removed = removeLogPrefix(message);

  if (removed.includes('Accepted publickey')) return processLogin(removed);
  else if (removed.includes('Invalid user')) return processAttemp(removed);
  else if (removed.includes('Disconnected from user'))
    return processDisconnect(removed);
};

const message = {
  process,
};
export default message;
