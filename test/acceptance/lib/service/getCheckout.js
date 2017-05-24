'use strict';

const request = require('request-promise');
const baseUri = require('./baseUri');

module.exports = code => {

    const options = {
        method: 'GET',
        uri: `${baseUri}/api/checkouts/${code}`,
        json: true,
        resolveWithFullResponse: true,
        simple: false
    };

    return request(options);
};
