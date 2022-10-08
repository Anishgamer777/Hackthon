module.exports = async (client, oldState, newState) => {
  try {
   if(newState.channelId && newState.channel.type === "GUILD_STAGE_VOICE" && newState.guild.me.voice.suppress) {
       
        await newState.guild.me.voice.setSuppressed(false)
        }
     
   
  } catch (e) {
    console.log(e)
  }
}
