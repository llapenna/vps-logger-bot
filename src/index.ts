import bot from '@/bot';
import watcher from '@/watcher';
import database from '@/utils/database';

(async () => {
  // Configure bot
  await bot.registerCommands();
  // Initialize database by reading the JSON file
  await database.init();

  // Watch for changes in the file
  watcher.start(({ newLines }) => {
    if (newLines) {
      newLines.forEach((line) => {
        bot.broadcastMessage(line);
      });
    }
  });

  // Start bot
  bot.start();
})();
