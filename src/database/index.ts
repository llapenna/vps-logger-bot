import path from 'node:path';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { Database } from '@/types/database';
import { PROJECT_PATH, NODE_ENV } from '@/utils/config';

/**
 * Creates a Lowdb instance, depending on the node environment
 * @returns A JSON Lowdb instance
 */
const createDb = () => {
  // Generate file depending on environment
  const fileName = `database.${NODE_ENV}.json`;
  const PATH = path.join(PROJECT_PATH, fileName);
  const DEFAULT: Database = { chats: [] };

  const adapter = new JSONFile<Database>(PATH);
  return new Low<Database>(adapter, DEFAULT);
};

export const db = createDb();

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
