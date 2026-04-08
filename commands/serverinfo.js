module.exports = {
  name: 'serverinfo',
  description: 'Show server info',
  ownerOnly: false,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const embed = {
      title: guild.name,
      description: `Owner: <@${guild.ownerId}>\nMembers: ${guild.memberCount}\nChannels: ${guild.channels.cache.size}\nRoles: ${guild.roles.cache.size}`,
      color: 0xff0000,
      timestamp: new Date()
    };

    message.reply({ embeds: [embed] });
  }
};
