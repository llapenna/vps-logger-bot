import logger from 'logger';

/**
 * @description Checks if an environment variable exists
 * @param identifier Name of the environment variable
 * @returns Value of the environment variable if it exists, otherwise throws an error
 */
function checkVariable(identifier: string) {
  const variable = process.env[identifier];

  logger.info('Checking: ', identifier, variable);
  if (typeof variable === 'undefined') {
    throw new Error(`Environment variable "${identifier}" is not defined.`);
  } else return variable;
}

/**
 * @description Bot token from BotFather
 */
export const BOT_TOKEN = checkVariable('BOT_TOKEN');
