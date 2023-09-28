import bot from '@/bot';
import watcher from '@/watcher';
import logger from '@/utils/logger';

(async () => {
  // Configure bot
  await bot.register();

  // Watch for changes in the file
  watcher.start(({ newLines }) => {
    if (newLines) {
      newLines.forEach((line) => {
        bot.broadcastMessage(line);
        logger.info(line);
      });
    }
  });

  // Start bot
  bot.start();
})();
