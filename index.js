const { Client, Intents } = require("discord.js")
// const ytdl = require("ytdl-core"); //Use this if you wanna play youtube links!
//Example:  createAudioResource(ytdl("https://youtu.be/JNl1_hRwpXE", { highWaterMark: 1024* 1024* 64,quality: "highestaudio"}), { inlineVoluem: true})
//WE ALSO NEED:    npm i  libsodium-wrappers    and    npm i @discordjs/opus    for playing audio!
const client = new Client({
    shards: "auto", //1700+ servers
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})
//Login to the Bot
client.login(require("./config.json").token);
//an array of all channels can be a database output too!
const Channels = require("./config.json").VC_channels;
//Once the bot is ready join all channels and play the audio
client.on("ready", async () => {


})

client.on("voiceStateUpdate", async (oldState, newState) => {
    }
})
