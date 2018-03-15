'use strict';

const path = require('path');

exports.plugin = {
    pkg: require('./package.json'),
    register: async (server, options) => {
        await server.register(require('inert'));

        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return h.file(path.join(__dirname, './public/index.html'));
            }
        });
    }
};