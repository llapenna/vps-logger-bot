/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Interface for `console.log`. Won't print on 'production' mode
 * @param args Same arguments as `console.log`
 */
function info(...args: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...args);
  }
}

/**
 * Interface for `console.error`. Always print
 * @param args Same arguments as `console.error`
 */
function error(...args: any[]) {
  console.error(...args);
}

/**
 * Interface for `console.warn`
 * @param args Same arguments as `console.warn`
 */
function warn(...args: any[]) {
  console.warn(...args);
}

const logger = {
  info,
  error,
  warn,
};

export default logger;
