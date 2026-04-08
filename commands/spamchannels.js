module.exports = {
  name: 'spamallchannels',
  description: 'Spam a custom message (with @everyone) in all channels',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const amount = parseInt(args[0]) || 20;
    const text = args.slice(1).join(" ") || "@everyone NUKED BY YADAV.DEV";

    message.reply(`🚀 Spamming in all channels (${amount} times each)...`);

    guild.channels.cache.filter(ch => ch.type === 0).forEach(channel => {
      for (let i = 0; i < amount; i++) {
        channel.send(text).catch(() => {});
      }
    });
  }
};
