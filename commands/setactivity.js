module.exports = {
  name: 'setactivity',
  description: 'Set custom status/activity',
  ownerOnly: true,
  async execute(message, args, client) {
    const activity = args.join(" ") || "Made by Yadav.Dev";
    client.user.setActivity(activity, { type: "PLAYING" });
    message.reply(`✅ Activity set to: ${activity}`);
  }
};
