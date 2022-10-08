const Channels = require("../config/config.json").VC_channels
const {joinChannel}= require('../handlers/Play.js')
module.exports = client => {
  try{
        for(const channelId of Channels){
        joinChannel(channelId,client);
        //wait 500ms        
        await new Promise(res => setTimeout(() => res(2), 500))
     
    }
    console.log('Join All Voice Channel')
  
  }catch(e){
    console.log(e)
    
  }
}
