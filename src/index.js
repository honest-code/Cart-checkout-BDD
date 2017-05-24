'use strict';

const server = require('./server'),
    heartbeat = require('./heartbeat'),
    createCheckout = require('./checkout/rest/createCheckout'),
    retrieveCheckout = require('./checkout/rest/retrieveCheckout'),
    addItemToCheckout = require('./checkout/rest/addItemToCheckout'),
    addPromotionToCheckout = require('./checkout/rest/addPromotionToCheckout');

let serverInstance = server.create();

server.start(serverInstance, 3000)
    .tap(() => {
        serverInstance.get('/api/heartbeat', heartbeat);

        serverInstance.post('/api/checkouts', createCheckout);
        serverInstance.get('/api/checkouts/:checkoutId', retrieveCheckout);
        serverInstance.post('/api/checkouts/:checkoutId/items', addItemToCheckout);
        serverInstance.post('/api/checkouts/:checkoutId/promotion', addPromotionToCheckout);

        console.log('Up and running');
    });
