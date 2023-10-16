import logger from '@/utils/logger';

/**
 * @description Checks if an environment variable exists
 * @param identifier Name of the environment variable
 * @returns Value of the environment variable if it exists, otherwise throws an error
 */
function checkVariable(identifier: string) {
  const variable = process.env[identifier];

  // Only log environment variables on development mode
  if (process.env.NODE_ENV === 'development')
    logger.info(`Checking:\t${identifier} = '${variable}'`);

  if (typeof variable === 'undefined') {
    throw new Error(`Environment variable "${identifier}" is not defined.`);
  } else return variable;
}

/**
 * @description Bot token from BotFather
 */
export const BOT_TOKEN = checkVariable('BOT_TOKEN');

/**
 * @description Path to the log file
 */
export const LOGFILE_PATH = checkVariable('LOGFILE_PATH');

/**
 * @description Path to the project. Used to access local project files
 */
export const PROJECT_PATH = checkVariable('PROJECT_PATH');

/**
 * @description Node environment. Could be 'production' or 'development'.
 */
export const NODE_ENV = checkVariable('NODE_ENV');
