import fs from 'node:fs';
import path from 'node:path';

import { NODE_ENV, PROJECT_PATH } from '@/utils/config';
import defaultData from '@/assets/database_default.json';

const DB_NAME = `database.${NODE_ENV}.json`;
export const DB_PATH = path.resolve(path.join(PROJECT_PATH, DB_NAME));

/**
 * Checks if the database file exists, if not, it creates it with default data
 * @param defaultData Default information to write in the database file if it doesn't exists
 */
export const createDatabaseFile = () => {
  // Check if the file doesn't exists
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultData), 'utf-8');
  }
};
