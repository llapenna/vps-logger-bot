import bot from '@/bot';
import message from '@/bot/message';
import watcher from '@/watcher';
import database from '@/database';

(async () => {
  // Configure bot
  await bot.registerCommands();
  // Initialize database by reading the JSON file
  await database.init();

  // Watch for changes in the file
  watcher.start(({ newLines }) => {
    if (newLines) {
      newLines.forEach((line) => {
        message.broadcast(line);
      });
    }
  });

  // Start bot
  bot.start();
})();
