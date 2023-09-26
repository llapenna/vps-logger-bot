import bot from '@/bot';
import watcher from '@/watcher';
import logger from '@/utils/logger';

(async () => {
  // Configure bot
  await bot.register();

  // Watch for changes in the file
  watcher.start(({ newLines }) => {
    if (newLines) {
      bot.broadcastMessage(newLines?.join('\n'));
      logger.info(newLines);
    }
  });

  // Start bot
  bot.start();
})();
