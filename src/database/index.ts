import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { Database } from '@/types/database';

import { DEFAULT_DATA, DB_PATH, createDatabaseFile } from './utils';

/**
 * Creates a Lowdb instance, depending on the node environment
 * @returns A JSON Lowdb instance
 */
const initInstance = () => {
  // Generate file depending on environment
  createDatabaseFile(DEFAULT_DATA);

  const adapter = new JSONFile<Database>(DB_PATH);
  return new Low<Database>(adapter, DEFAULT_DATA);
};

export const db = initInstance();

/**
 * Initializes the `db.data` object with
 * @returns A promise that resolves when the database is ready
 */
const init = () => {
  return db.read();
};

const database = {
  init,
};
export default database;
