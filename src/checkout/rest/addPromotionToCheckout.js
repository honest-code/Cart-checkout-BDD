'use strict';

const checkouts = require('../domain/checkouts');

module.exports = function(req, res, next) {
    let id = req.params.checkoutId;
    let promotion = req.params.promotion;
    let checkout = checkouts.addPromotion(id, promotion);
    if (checkout === undefined) {
        res.send(404);
    } else {
        res.send(200, checkout);
    }

    return next();
};