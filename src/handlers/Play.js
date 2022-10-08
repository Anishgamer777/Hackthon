const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require("@discordjs/voice");
const {client} = require('../index.js')
    function joinChannel(channelId,client) {
        client.channels.fetch(channelId).then(channel => {
            //JOIN THE VC AND PLAY AUDIO
            const VoiceConnection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator
            });
            //use a: direct mp3 link / file / const ytdl = require("ytdl-core"); ytdl("https://youtu.be/dQw4w9WgXcQ")
            const resource = createAudioResource("https://streams.ilovemusic.de/iloveradio109.mp3", {
                inlineVolume: true
            });
            resource.volume.setVolume(0.2);
            const player = createAudioPlayer()
            VoiceConnection.subscribe(player);
            player.play(resource);
            player.on("idle", () => {
                try{
                    player.stop()
                } catch (e) { }
                try{
                    VoiceConnection.destroy()
                } catch (e) { }
              joinChannel(channel.id,client);
        
            })
        }).catch(console.error)
    }
