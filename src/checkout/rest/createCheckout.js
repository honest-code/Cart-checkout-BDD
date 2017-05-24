'use strict';

const checkouts = require('../domain/checkouts');

module.exports = (request, response, next) => {

    response.setHeader('Location', 'http://localhost:3000/api/checkouts/' + request.body.code);
    response.send(201, checkouts.create(request.body.code));

    return next();
};
