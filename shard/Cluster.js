const Cluster = require('discord-hybrid-sharding');
const config = require('../src/config/config.json');
const manager = new Cluster.Manager(`../src/index.js`, {
    totalShards: auto, 
    shardsPerClusters: 2,
    //totalClusters: 7,
    mode: 'process',
    token: config.token
});
manager.on('clusterCreate', cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });
