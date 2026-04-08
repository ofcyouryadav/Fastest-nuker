module.exports = {
  name: 'spameveryone',
  description: 'Spam @everyone in current channel (alias)',
  ownerOnly: true,
  async execute(message, args, client) {
    const amount = parseInt(args[0]) || 50;
    message.reply(`🚀 Mass pinging everyone...`);

    for (let i = 0; i < amount; i++) {
      message.channel.send("@everyone NUKED BY YADAV.DEV").catch(() => {});
    }
  }
};
