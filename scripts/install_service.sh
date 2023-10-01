# Variables
SERVICE_FILE=$SERVICE_PATH/vps-logger-bot.service

# Create folder for service if not exists
echo "🔄 Creating service folder" $SERVICE_PATH "..."
mkdir -p $SERVICE_PATH
echo "✅ Created!\n"

# Copy service file
echo "🔄 Copy service file into" $SERVICE_FILE "..."
cp ./vps-logger-bot.service.template $SERVICE_FILE
echo "✅ Copied!\n"

# Replace env variables values
echo "🔄 Replacing env variables values..."
sed -i.bak -e s@_LOGFILE_PATH@$LOGFILE_PATH@g -e s@_BOT_TOKEN@$BOT_TOKEN@g -e s@_WORKDIR@$HOME@g -e s@_PROJECT_PATH@$PROJECT_PATH@g $SERVICE_PATH/vps-logger-bot.service
echo "✅ Replaced!\n"