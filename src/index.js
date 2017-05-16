'use strict';

const server = require('./server'),
    heartbeat = require('./heartbeat.js'),
    createCheckout = require('./checkout/rest/createCheckout.js'),
    retrieveCheckout = require('./checkout/rest/retrieveCheckout.js'),
    addItemToCheckout = require('./checkout/rest/addItemToCheckout.js');

let serverInstance = server.create();

server.start(serverInstance, 3000)
    .tap(() => {
        serverInstance.get('/api/heartbeat', heartbeat);

        serverInstance.post('/api/checkouts', createCheckout);
        serverInstance.get('/api/checkouts/:checkoutId', retrieveCheckout);
        serverInstance.post('/api/checkouts/:checkoutId/items', addItemToCheckout);

        console.log('Up and running');
    });
