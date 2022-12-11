const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jokes')
		.setDescription('Tell me a random joke.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Two fish in a tank, one turns to the other and says "Do you know how to drive this thing?!"`);
	},
};