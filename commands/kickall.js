module.exports = {
  name: 'kickall',
  description: 'Kick all members (except you)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Kicking all members...");

    const promises = guild.members.cache.map(member => {
      if (member.id !== client.user.id && member.kickable) {
        return member.kick("Nuked by Yadav.Dev").catch(() => {});
      }
    });

    Promise.allSettled(promises).then(() => {
      message.reply("✅ All kickable members kicked.");
    });
  }
};
