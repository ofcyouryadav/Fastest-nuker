module.exports = {
  name: 'deleteallchannels',
  description: 'Delete all channels (fast)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Deleting all channels...");

    const promises = guild.channels.cache.map(channel => 
      channel.delete().catch(() => {})
    );

    Promise.allSettled(promises).then(() => {
      message.reply("✅ All channels deleted.");
    });
  }
};
