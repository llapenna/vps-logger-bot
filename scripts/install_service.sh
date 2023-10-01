# Create folder for service if not exists
echo "🔄 Creating service folder" $SERVICE_PATH "..."
mkdir -p $SERVICE_PATH
echo "✅ Created!\n"

# Copy service file
echo "🔄 Copy service file into" $SERVICE_PATH"/vps-logger-bot.service..."
cp ./vps-logger-bot.service.template $SERVICE_PATH/vps-logger-bot.service
echo "✅ Copied!\n"

# Replace env variables values
echo "🔄 Replacing env variables values..."
sed -i.bak -e s@_LOGFILE_PATH@$LOGFILE_PATH@g -e s@_BOT_TOKEN@$BOT_TOKEN@g $SERVICE_PATH/vps-logger-bot.service
echo "✅ Replaced!\n"