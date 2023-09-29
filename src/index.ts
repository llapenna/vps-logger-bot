import bot from '@/bot';
import watcher from '@/watcher';

(async () => {
  // Configure bot
  await bot.register();

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
