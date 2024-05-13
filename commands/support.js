const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "support me xd",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://www.youtube.com/channel/UCPOwL09DQXKTVgpMTxQkQZA";
      const githubLink = "https://github.com/pinksealteam";
      const youtubeLink = "https://www.instagram.com/caajger";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Cajger',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://www.youtube.com/channel/UCPOwL09DQXKTVgpMTxQkQZA'
          })
            .setDescription(`➡️ **Zapratite moj yubitubi kanal:**\n- Discord - ${supportServerLink}\n\n➡️ **Pogledajte moj github ako ste nerd:**\n- GitHub - ${githubLink}\n- pogledajte fightclub - \n- Zapratite me na ig - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1151522152185597952/1239555175870631996/Cool20Text20-20ZestFestTarik20Music20458168465120178.png?ex=66435937&is=664207b7&hm=fb726dff3643a3877c38c76d9d5cf8d71e86af0775e4466a8c409d47cba54a8f&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

