module.exports = {
    name: "warn",
    description: "Annab kasutajale hoiatuse.",
    execute(interaction, userId, reason, database) {
      // Lisa hoiatus andmebaasi või mällu
      const warnings = database.get(userId) || [];
      warnings.push({ reason, date: new Date() });
      database.set(userId, warnings);
  
      // Kontrolli, kas kasutaja on saanud kolm hoiatust
      if (warnings.length >= 3) {
        interaction.reply(`Kasutaja ${userId} on saanud 3 hoiatust ja talle rakendub mute.`);
        // Lisa mute loogika siin
      } else {
        interaction.reply(`Hoiatus kasutajale ${userId} lisatud. Põhjus: ${reason}`);
      }
    }
  };
  