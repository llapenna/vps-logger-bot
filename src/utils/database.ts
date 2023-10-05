import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { Database, Entry } from '@/types/database';

const PATH = './database.json';
const DEFAULT_DATA: Database = { broadcastList: [], chats: [] };

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Database>(PATH);
const db = new Low<Database>(adapter, DEFAULT_DATA);

/**
 * Initializes the `db.data` object with
 * @returns A promise that resolves when the database is ready
 */
const init = () => {
  return db.read();
};

/**
 * Defines the CRUD functions for a given key
 * @param key Database key
 * @returns A set of CRUD functions
 */
const crud = <T extends object = {}>(key: keyof Database) => ({
  create: async (value: Entry<T>[number]): Promise<Entry<T>[number]> => {
    // TODO: improve this typing by removing the unknown cast
    (db.data[key] as unknown as Entry<T>).push(value);
    await db.write();
    return value;
  },
  // TODO: improve this typing by removing the unknown cast
  read: (): Entry<T> => db.data[key] as unknown as Entry<T>,
  update: async (value: Entry<T>, id: number): Promise<Entry<T>> => {
    db.data[key].map((item) => (item.id === id ? value : item));
    await db.write();
    return value;
  },
  delete: (id: number): Promise<void> => {
    db.data[key].filter((item) => item.id !== id);
    return db.write();
  },
});

// Define CRUD functions for each key
const broadcastList = crud('broadcastList');
const chats = crud('chats');

const database = {
  init,
  broadcastList,
  chats,
};
export default database;
