'use strict';

const request = require('request-promise');
const baseUri = require('./baseUri');

module.exports = (checkoutId, promotion) => {

    const options = {
        method: 'POST',
        uri: `${baseUri}/api/checkouts/${checkoutId}/promotion`,
        json: {
            'promotion': promotion
        },
        resolveWithFullResponse: true
    };

    return request(options);
};