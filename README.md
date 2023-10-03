# VPS Logger Bot 🤖

A simple Telegram powered (using [Telegraf](https://telegraf.js.org/)) bot that logs the status of a VPS (or any other server) and sends it to you via Telegram.

The bot is capable of logging the following:

- 🔌 SSH connections
- ⛔ Failed SSH connections
- 📌 Attemps information (location, users, etc)

## Installation

1. Clone the repository

```bash
git clone git@github.com:llapenna/vps-logger-bot.git
```

2. Install dependencies

```bash
npm ci
```

3. Create a `.env` file with the following content:

```bash
# Used by the application to work properly
BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
LOGFILE_PATH="/var/log/auth.log"
# Used by the installation scripts to install the service
SERVICE_PATH="/etc/systemd/system"
PROJECT_PATH="path/to/project/root"
```

4. Install the bot's service
  
```bash
npm run install-service
```

> 💡 Super user privileges may be required to install the service. Try running the script using `sudo`

After executing the `install` script, the service will be automatically started. You can check its status by running:

```bash
systemctl status vps-logger-bot
```

And read its logs by running:

```bash
journalctl -u vps-logger-bot
```
