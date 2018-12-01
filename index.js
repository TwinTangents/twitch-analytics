require('dotenv').config();
const io = require('socket.io-client');

const endpoint = process.env.PUBSUB_ENDPOINT;
const manager = new io.Manager(endpoint, {
	reconnectionDelayMax: 60000
});

manager.on('connection', () => console.log('connected'));
manager.on('ping', () => console.log('ping received'));
manager.on('pong', (ms) => console.log(`pong sent (${ms})`));
manager.on('connect_error', (err) => console.log('connect error: ', err));