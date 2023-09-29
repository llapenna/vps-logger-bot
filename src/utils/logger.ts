/* eslint-disable @typescript-eslint/no-explicit-any, no-console */

const prefix = (type: 'INFO' | 'ERROR' | 'WARN') =>
  `[${new Date().toLocaleString()} - ${type}]:`;

/**
 * Interface for `console.log`. Won't print on 'production' mode
 * @param args Same arguments as `console.log`
 */
function info(...args: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(prefix('INFO'), ...args);
  }
}

/**
 * Interface for `console.error`. Always print
 * @param args Same arguments as `console.error`
 */
function error(...args: any[]) {
  console.error(prefix('ERROR'), ...args);
}

/**
 * Interface for `console.warn`
 * @param args Same arguments as `console.warn`
 */
function warn(...args: any[]) {
  console.warn(prefix('WARN'), ...args);
}

const logger = {
  info,
  error,
  warn,
};

export default logger;
