const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const warn = require('./commands/warn');
const filter = require('./commands/filter');
const bannedWords = ["halb", "keelatud", "sõna"];
const database = new Map(); // Lihtne andmestruktuur hoiatussüsteemi jaoks

client.on('messageCreate', (message) => {
  if (!message.author.bot) {
    filter.execute(message, bannedWords);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (interaction.commandName === 'warn') {
    const userId = interaction.options.getUser('user').id;
    const reason = interaction.options.getString('reason');
    warn.execute(interaction, userId, reason, database);
  }
});

client.login('YOUR_BOT_TOKEN');
