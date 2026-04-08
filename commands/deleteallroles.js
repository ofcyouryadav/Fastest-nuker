module.exports = {
  name: 'deleteallroles',
  description: 'Delete all roles except @everyone',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Deleting all roles...");

    const promises = guild.roles.cache
      .filter(r => r.name !== "@everyone" && r.editable)
      .map(role => role.delete().catch(() => {}));

    Promise.allSettled(promises).then(() => {
      message.reply("✅ All roles deleted.");
    });
  }
};
