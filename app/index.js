'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
});

const init = async () => {

    await server.register(require('./plugins/portal'));
    await server.register(require('./plugins/logger'));

    await server.start();
    console.log(`Hapi.js server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.error(err);
    process.exit(1);
});

init();