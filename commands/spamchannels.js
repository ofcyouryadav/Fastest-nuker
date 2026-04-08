module.exports = {
  name: 'spamchannels',
  description: 'Spam create channels',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const amount = parseInt(args[0]) || 50;
    message.reply(`🚀 Spamming ${amount} channels...`);

    for (let i = 0; i < amount; i++) {
      guild.channels.create({ 
        name: `nuked-by-yadav-${i}`,
        type: 0 // text channel
      }).catch(() => {});
    }

    message.reply("✅ Channel spam started.");
  }
};
