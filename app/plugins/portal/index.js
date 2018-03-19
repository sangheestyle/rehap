'use strict';

const path = require('path');
const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('./next-wrapper');

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

        server.route({
            method: 'GET',
            path: '/a',
            handler: pathWrapper(options.app, '/a')
        })

        server.route({
            method: 'GET',
            path: '/_next/{p*}',
            handler: nextHandlerWrapper(options.app)
        });

        server.route({
            method: 'GET',
            path: '/{p*}',
            handler: defaultHandlerWrapper(options.app)
        });
    }
};