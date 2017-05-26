'use strict';

const request = require('request-promise');
const baseUri = require('./baseUri');

module.exports = (checkoutId, itemName, itemPrice) => {

    const options = {
        method: 'POST',
        uri: `${baseUri}/api/checkouts/${checkoutId}/price`,
        json: {
            'itemName': itemName,
            'itemPrice': parseInt(itemPrice)
        },
        resolveWithFullResponse: true
    };

    return request(options);
};