const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

const config = require('./config.json');

const client = new Client({
  checkUpdate: false,
  autoRedeemNitro: false,
});

const prefix = config.prefix || '!';
const ownerID = config.ownerID;

client.commands = new Map();

fs.readdir('./commands', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (file.endsWith('.js')) {
      const command = require(`./commands/${file}`);
      client.commands.set(command.name, command);
      console.log(chalk.green(`[+] Loaded command: ${command.name}`));
    }
  });
});

client.on('ready', () => {
  console.log(chalk.magenta(`\n✅ Selfbot Logged in as ${client.user.tag}`));
  console.log(chalk.cyan(`Prefix: ${prefix} | Owner: ${ownerID}\n`));
});

client.on('messageCreate', async (message) => {
  if (message.author.id !== client.user.id) return; // Only respond to self

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  // Owner check (optional but recommended)
  if (command.ownerOnly && message.author.id !== ownerID) {
    return message.reply("❌ Owner only command.");
  }

  try {
    await command.execute(message, args, client);
  } catch (error) {
    console.error(chalk.red(`Error executing ${commandName}:`), error);
    message.reply("❌ Error executing command.");
  }
});

client.login(process.env.TOKEN || config.token).catch(err => {
  console.error(chalk.red("Login failed:"), err.message);
});
