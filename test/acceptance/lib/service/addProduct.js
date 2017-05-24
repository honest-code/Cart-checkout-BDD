'use strict';

const request = require('request-promise');
const baseUri = require('./baseUri');

module.exports = (checkoutId, itemName) => {

    const options = {
        method: 'POST',
        uri: `${baseUri}/api/checkouts/${checkoutId}/items`,
        json: {
            'itemName': itemName
        },
        resolveWithFullResponse: true
    };

    return request(options);
};