import type { Stats } from 'fs';

export type WatcherCallbackEvent = {
  event?: Stats;
  content: string;
  path: string;
};
export type WatcherCallback = (event: WatcherCallbackEvent) => void;
