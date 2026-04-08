module.exports = {
  name: 'deleteallemojis',
  description: 'Delete all custom emojis',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Deleting all emojis...");

    const promises = guild.emojis.cache.map(emoji => 
      emoji.delete().catch(() => {})
    );

    Promise.allSettled(promises).then(() => {
      message.reply("✅ All emojis deleted.");
    });
  }
};
