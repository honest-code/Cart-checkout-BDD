'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');

module.exports = function(req, res, next) {
    let id = req.params.checkoutId;
    let itemName = req.params.itemName;
    let checkout = checkoutRepository.addItem(id, itemName);
    if (checkout === undefined) {
        res.send(404);
    } else {
        res.send(200, checkout);
    }

    return next();
};