import fs from 'node:fs';

/**
 * Total lines count of the file
 */
let lines: number = 0;

/**
 * Get the number of lines within a file
 * @param fileContents File content
 * @returns Lines count
 */
export const getLinesCount = (fileContents: string): number =>
  fileContents.split('\n').length;

/**
 * Initialize lines count variable
 * @param path Path to the file
 */
export const initLineCount = (path: string) => {
  const file = fs.readFileSync(path, 'utf-8');
  lines = getLinesCount(file);
};

/**
 * Get new lines added to the file
 * @param content File content
 * @returns New lines added to the file
 */
export const getNewLines = (content: string): string[] => {
  const newLinesCount = getLinesCount(content);
  const diff = newLinesCount - lines;

  // Store new lines count, even if lines were removed
  lines = newLinesCount;
  // Nothing changed or lines were removed
  if (diff <= 0) return [];

  // Get last n lines and remove empty ones
  return content
    .split('\n')
    .slice(-diff)
    .filter((str) => !!str);
};
