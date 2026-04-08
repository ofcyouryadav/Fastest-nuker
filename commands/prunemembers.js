module.exports = {
  name: 'prunemembers',
  description: 'Prune inactive members (requires permission)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const days = parseInt(args[0]) || 7;
    message.reply(`🧹 Pruning members inactive for ${days} days...`);

    guild.members.prune({ days: days, reason: "Pruned by Yadav.Dev" })
      .then(pruned => message.reply(`✅ Pruned ${pruned} members.`))
      .catch(err => message.reply(`❌ Error: ${err.message}`));
  }
};
