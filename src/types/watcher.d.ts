import type { FileChangeInfo } from 'node:fs/promises';

export type WatcherCallbackEvent = {
  event: FileChangeInfo<string>;
  content: string;
};
export type WatcherCallback = (event: WatcherCallbackEvent) => void;
