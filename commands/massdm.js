module.exports = {
  name: 'massdm',
  description: 'Mass DM all members (slow due to rate limits)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const msg = args.join(" ") || "Nuked by Yadav.Dev - Join my server";
    message.reply("📨 Starting mass DM... (This will be slow)");

    guild.members.cache.forEach(member => {
      if (!member.user.bot) {
        member.send(msg).catch(() => {});
      }
    });

    message.reply("✅ Mass DM attempts started.");
  }
};
