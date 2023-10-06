import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { Database } from '@/types/database';

const PATH = './database.json';
const DEFAULT_DATA: Database = { chats: [] };

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Database>(PATH);
export const db = new Low<Database>(adapter, DEFAULT_DATA);

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
