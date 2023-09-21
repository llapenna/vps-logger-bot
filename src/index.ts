import controls from '@/bot';
import watcher from '@/watcher';
import logger from '@/utils/logger';

(async () => {
  // Configure bot
  await controls.register();

  // Watch for changes in the file
  watcher.start(({ newLines }) => {
    if (newLines) {
      controls.sendToWhitelisted(newLines?.join('\n'));
      logger.info(newLines);
    }
  });

  // Start bot
  controls.start();
})();
