import fs from 'node:fs';
import logger from './logger';

/**
 * Total lines count of the file
 */
let lines: number = 0;

/**
 * Get the number of lines in a string (preferably a file content)
 * @param content File content
 * @returns Lines count
 */
export const getLinesCount = (content: string): number =>
  content.split('\n').length;

/**
 * Initialize lines count variable
 * @param path Path to the file
 */
export const initializeLines = (path: string) => {
  lines = getLinesCount(fs.readFileSync(path, 'utf-8'));
  logger.info('Initial lines: ', lines);
};

/**
 * Get new lines added to the file
 * @param content File content
 * @returns New lines added to the file
 */
export const getNewLines = (content: string): string[] => {
  const newFileLinesCount = getLinesCount(content);
  const diff = newFileLinesCount - lines;

  // Store new lines count, even if lines were removed
  lines = newFileLinesCount;
  logger.info('diff: ', diff);
  // Nothing changed or lines were removed
  if (diff <= 0) return [];

  // Get last n lines and remove empty ones
  return content
    .split('\n')
    .slice(-diff)
    .filter((str) => !!str);
};
