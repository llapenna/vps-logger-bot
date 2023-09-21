import chokidar from 'chokidar';
import fs from 'node:fs';

import type { WatcherCallback } from '@/types/watcher';
import logger from '@/utils/logger';

import { LOGFILE_PATH } from './utils/config';

let watcher: chokidar.FSWatcher | null = null;

/**
 * Starts the watcher
 * @param callback Callback function to be called when the file is updated
 */
const start = (callback: WatcherCallback) => {
  watcher = chokidar.watch(LOGFILE_PATH);

  // Register events
  watcher.on('change', (path, event) => {
    logger.info(`File "${LOGFILE_PATH}" changed`);
    const content = fs.readFileSync(LOGFILE_PATH, 'utf-8');
    callback({ path, event, content });
  });
};

/**
 * Stops the watcher
 */
const stop = () => watcher?.close();

const controls = {
  start,
  stop,
};
export default controls;
