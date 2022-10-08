const { Client, GatewayIntentBits } = require('discord.js');
const config = rewuire('./config/config.json')
const fs = require("fs");
const Cluster = require('discord-hybrid-sharding');

const client = new Client({
  shards: Cluster.data.SHARD_LIST,
    shardCount: Cluster.data.TOTAL_SHARDS,
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GUILD_VOICE_STATES,
	],
});
client.login(config.token);

console.log('Bot Loaded')
const allevents = [];
    try {
        let amount = 0;
        const load_dir = (dir) => {
            const event_files = fs.readdirSync(`./src/events/`).filter((file) => file.endsWith(".js"));
            for (const file of event_files) {
                try {
                    const event = require(`../events/${file}`)
                    let eventName = file.split(".")[0];
                    allevents.push(eventName);
                    client.on(eventName, event.bind(null, client));
                    amount++;
                } catch (e) {
                    console.log(e)
                }
            }
        }
        console.log('Loaded all Events')
}catch(error){
console.log(error)  
}
