var redis = require('redis');
var redis_port = process.env.port || 6379;
var client = redis.createClient(redis_port);

client.on('connect', () => {
    console.log('✅ Connected to Redis Cache!')
}).on('error', error => {
    console.log(error)
})

var closeInstance = async function(callback) {
    await new Promise((resolve) => {
        client.quit(() => {
            resolve();
        });
    });
    await new Promise(resolve => setImmediate(resolve));
}

module.exports = {
    client,
    closeInstance
};