module.exports = {
    name: "filter",
    description: "Keelatud sõnade filter.",
    execute(message, bannedWords) {
      if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
        message.delete();
        message.channel.send(`${message.author}, seda sõna siin kasutada ei tohi!`);
      }
    }
  };
  