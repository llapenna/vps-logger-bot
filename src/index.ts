import bot from '@/bot';
import message from '@/message';
import watcher from '@/watcher';
import database from '@/database';

(async () => {
  // Configure bot
  await bot.registerActions();
  // Initialize database by reading the JSON file
  await database.init();

  // Watch for changes in the file
  watcher.start(({ newLines }) => {
    message.process(newLines);
  });

  // Start bot
  bot.start();
})();
