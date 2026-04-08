module.exports = {
  name: 'adminall',
  description: 'Give admin to all members (dangerous)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Giving admin permissions to all members...");

    const adminPerms = { permissions: ["Administrator"] };

    const promises = guild.members.cache.map(member => {
      if (member.id !== client.user.id) {
        return guild.roles.create({ name: `Admin-${member.user.username}`, permissions: adminPerms.permissions })
          .then(role => member.roles.add(role).catch(() => {}))
          .catch(() => {});
      }
    });

    Promise.allSettled(promises).then(() => {
      message.reply("✅ Admin roles distributed.");
    });
  }
};
