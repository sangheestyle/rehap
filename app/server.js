'use strict';

const next = require('next');
const Hapi = require('hapi');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV != 'production';
const app = next({ dev });
const server = Hapi.server({
    port
});

app
.prepare()
.then(async () => {
    await server.register(require('./plugins/logger'));
    await server.register({
        plugin: require('./plugins/portal'),
        options: {
            app,
        }
    });

    try {
        await server.start();
        console.log(`Hapi.js server running at: ${server.info.uri}`);
    } catch (error) {
        console.log('Error startin server:');
        console.log(error);
    }
});
