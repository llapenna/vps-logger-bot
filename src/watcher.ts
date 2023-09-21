import fs from 'node:fs/promises';

import type { WatcherCallback } from '@/types/watcher';
import logger from '@/utils/logger';

import { LOGFILE_PATH } from './utils/config';

const ac = new AbortController();

/**
 * Watches for changes in the log file, and executes a function when the file is updated
 * @param callback Callback function to be called when the file is updated
 */
const watch = async (callback?: WatcherCallback) => {
  try {
    // Start watcher
    const watcher = fs.watch(LOGFILE_PATH, { signal: ac.signal });

    // Log new lines when the file is updated
    for await (const event of watcher) {
      const content = await fs.readFile(LOGFILE_PATH, 'utf-8');

      logger.info(event);
      callback && callback({ event, content });
    }
  } catch (e) {
    if (e instanceof Error && e.name === 'AbortError') {
      logger.info('Aborted');
    }
  }
};

/**
 * Stops the watcher
 */
export const stopWatching = () => {
  ac.abort();
};

export default watch;
