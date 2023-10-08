import chokidar from 'chokidar';
import fs from 'node:fs';

import type { WatcherCallback } from '@/types/watcher';
import { LOGFILE_PATH } from '@/utils/config';

import { getNewLines, initLineCount } from './file';

let watcher: chokidar.FSWatcher | null = null;

/**
 * Starts the watcher
 * @param callback Callback function to be called when the file is updated
 */
const start = (callback: WatcherCallback) => {
  // Store initial lines count
  initLineCount(LOGFILE_PATH);

  // Initialize watcher
  watcher = chokidar.watch(LOGFILE_PATH, {
    alwaysStat: true,
    ignoreInitial: true,
  });

  // Register events
  watcher.on('change', (path, event) => {
    const content = fs.readFileSync(LOGFILE_PATH, 'utf-8');

    const newLines = getNewLines(content);
    callback({ path, event, content, newLines });
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
