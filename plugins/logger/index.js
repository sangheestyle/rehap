'use strict';

exports.plugin = {
    pkg: require('./package.json'),
    register: async function (server, options) {
        await server.register({
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: false,
                logEvents: ['response']
            }
        });
    }
};