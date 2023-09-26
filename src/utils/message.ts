import messages from '@/assets/message.json';

/**
 * Process an 'attemp' line and returns a formatted message to be sent to the user
 * @param message Message to be processed
 * @returns Formatted message
 */
const processAttemp = (message: string): string => {
  const [user, ip, , port] = message.split(' ').slice(3);
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
  const [user, , ip, , port] = message.split(' ').slice(3);

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
  const [user, ip, , port] = message.split(' ').slice(3);

  return messages.disconnected
    .replace('$user$', user)
    .replace('$ip$', ip)
    .replace('$port$', port);
};

const process = (message: string) => {
  if (message.includes('Accepted publickey')) return processLogin(message);
  else if (message.includes('Invalid user')) return processAttemp(message);
  else if (message.includes('Disconnected from'))
    return processDisconnect(message);
};

const message = {
  process,
};
export default message;
