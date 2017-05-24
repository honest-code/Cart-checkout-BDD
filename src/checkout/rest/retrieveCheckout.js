'use strict';

const checkouts = require('../domain/checkouts');

module.exports = (request, response, next) => {
    const id = request.params.checkoutId;
    const checkout = checkouts.retrieve(id);

    if (checkout === undefined) {
        response.send(404);
    } else {
        response.send(200, checkout);
    }

    return next();
};
