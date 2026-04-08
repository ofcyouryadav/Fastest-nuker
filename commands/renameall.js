module.exports = {
  name: 'renameall',
  description: 'Rename all members',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const name = args.join(" ") || "Nuked by Yadav.Dev";
    message.reply(`🚀 Renaming all members to: ${name}`);

    const promises = guild.members.cache.map(member => {
      if (member.id !== client.user.id && member.manageable) {
        return member.setNickname(name).catch(() => {});
      }
    });

    Promise.allSettled(promises).then(() => {
      message.reply("✅ All renameable members renamed.");
    });
  }
};
